<template>
  <div class="chart">
    <svg v-if="chartData" :width="width" :height="chartHeight + 10">
      <g clip-path="url(#chart)" :transform="`translate(${ yPadding * 2 }, ${ xPadding })`">
        <rect
          @click.self="resetZoom"
          ref="chart"
          :width="chartWidth - yPadding * 2"
          :height="chartHeight - xPadding * 2"
          fill="#F2F2F2"/>
        <g v-for="(bar, i) in computedBars" :key="bar.title">
          <rect
            @click="clickBar(bar)"
            :x="(!barData || !barData[0] || !barData[1] ? 1 : xScale(barData[0] > barData[1] ? barData[1] : barData[0])) + 0.5 * xPadding"
            :y="chartHeight - xPadding * 2 - barHeight * (i + 1) - i * 5"
            :height="barHeight"
            :width="Math.max(barWidth(barData), xScale(15) - xScale(14))"
            :rx="barHeight / 2"
            :fill="barColor(bar.title)"
            style="cursor: pointer;"
            opacity="0.3"
            v-for="barData in bar.fromTo" :key="barData"/>
        </g>
        <g :transform="`translate(${ xPadding * 0.5 }, ${ 0 })`">
          <path class="line" :style="`stroke: url(#svgGradient-${id})`" :d="line(slicedChartData)"/>
        </g>
      </g>
      <g transform="translate(0, 40)">
        <g class="y-axis" fill="none" transform="translate(20, 0)">
          <g
            v-for="tick in yTicks"
            :key="tick"
            class="tick"
            opacity="1"
            font-size="10"
            font-family="sans-serif"
            text-anchor="end"
            :transform="`translate(${ xPadding }, ${ yScale(tick) - yPadding})`"
          >
            <line :opacity="tick === 0 ? 1 : 0.1" stroke="currentColor" :x2="chartWidth - xPadding * 2"></line>
            <text opacity="0.7" fill="currentColor" x="-9" dy="0.32em">{{ tick }}</text>
          </g>
        </g>
        <g class="x-axis" fill="none" :transform="`translate(${ yPadding * 0.5 + 20 }, 0)`">
          <g
            v-for="tick in xTicks"
            @mouseover="hoverChart(tick)"
            style="cursor: pointer;"
            :key="tick"
            class="tick"
            opacity="1"
            font-size="10"
            font-family="sans-serif"
            text-anchor="middle"
            :transform="`translate(${ xScale(tick) + xPadding * 1 }, ${ - xPadding })`"
          >
            <line
              opacity="0.03"
              :class="{ active: week === tick }"
              stroke="currentColor"
              stroke-width="2"
              x1="0"
              x2="0"
              y1="0"
              :y2="chartHeight - yPadding * 2"/>
            <g>
              <rect v-if="week === tick" fill="#F2F2F2" x="-15" :y="chartHeight - 40" width="30px" height="30px"/>
              <text opacity="0.7" fill="currentColor" dy="0.32em" :y="chartHeight - 25">{{ tick }}</text>
            </g>
            <g v-if="week === tick" transform="translate(0, 20)">
              <rect fill="black" x="-25" y="-15" width="50px" height="30px"/>
              <text color="white" fill="currentColor" dy="0.32em">{{ (chartData.find(x => x[0] === tick) || [0,0])[1].toFixed(2) }}%</text>
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="chart">
          <rect
            :width="chartWidth - yPadding * 2"
            :height="chartHeight - xPadding * 2"/>
        </clipPath>
        <linearGradient :id="`svgGradient-${id}`" x1="0%" x2="0%" :y1="`${ maxValue / (maxValue + Math.abs(minValue)) * 100 }%`" y2="100%">
          <stop class="start" offset="0%" stop-color="#FF6363" stop-opacity="1"/>
          <stop class="end" offset="0%" stop-color="#6BA1FF" stop-opacity="1"/>
        </linearGradient>
      </defs>
    </svg>
    <div class="countries">
      <button
        @click="$emit('country', countryCode)"
        v-for="countryCode in Object.keys(no2PerCountry)"
        :key="countryCode"
        :class="{ active: country === countryCode }">{{ countryCode }}</button>
    </div>
  </div>
</template>

<script>
import { scaleLinear, line, curveBasis } from 'd3';

export default {
  props: ['week', 'width', 'id', 'zoomMeasure', 'minMax', 'measures', 'country', 'domain'],
  emits: ['week', 'measure', 'country'],
  computed: {
    maxValue() {
      return Math.max(...this.slicedChartData.map(d => d[1]));
    },
    minValue() {
      return Math.min(...this.slicedChartData.map(d => d[1]));
    },
    yScale() {
      return scaleLinear()
       .range([0, this.chartHeight * this.multiplier - this.yPadding * 2])
       .domain([this.minMax[0] ? this.minMax[0] : this.maxValue, this.minMax[0] ? this.minMax[1] : this.minValue]);
    },
    xScale() {
      return scaleLinear()
       .domain(this.domain || [1, 53])
       .range([0, this.chartWidth - this.xPadding * 3])
       .clamp(true);
    },
    yTicks() {
      return this.yScale.ticks(8);
    },
    xTicks() {
      let ticks = this.domain ? this.domain[1] - this.domain[0] : 53;
      if(this.width < 840) ticks = Math.ceil(ticks / 2)
      if(this.width < 510) ticks = Math.ceil(ticks / 4)

      return this.xScale.ticks(ticks);
    },
    line() {
      return line()
        .curve(curveBasis)
        .x(d => this.xScale(d[0]))
        .y(d => this.yScale(d[1]));
    },
    no2PerCountry() {
      return this.$store.getters.no2PerCountry;
    },
    chartData() {
      const country = this.country;
      const data = this.no2PerCountry[country];
      if(!data) return [];

      let no2 = [];

      for(let i = 0; i + Math.floor(data.length / 2) < data.length; i++) {
        let a = data[i].number;
        let b = data[i + Math.floor(data.length / 2)].number;
        if(a < 0 || !a) a = 0;
        if(b < 0 || !b) b = 0;
        const percentage = (b - a) / a * 100;
        no2.push([i + 1, isFinite(percentage) ? percentage : 0]);
      }
      return no2;
    },
    slicedChartData() {
      return this.chartData.slice(this.domain ? this.domain[0] - 1 : 1, this.domain ? this.domain[1] : 53);
    },
    chartWidth() {
      return this.width - 50;
    },
    computedBars() {
      if(!this.measures || !this.measures[0]) return [];
      const categories = Object.keys(this.measures[0]);
      const mapped = categories.map(c => {
        return {
          title: c,
          color: this.measures[0][c].color,
          fromTo: this.measures[0][c] ? this.calculateBars(this.measures[0][c].measures) : []
        }
      });
      return mapped;
    }
  },
  data() {
    return { 
      chartHeight: 600,
      yPadding: 20,
      xPadding: 20,
      multiplier: 0.85,
      barHeight: 13
    }
  },
  methods: {
    clickBar(bar) {
      this.$emit('measure', bar.title);
    },
    resetZoom() {
      this.$emit('measure', undefined);
    },
    hoverChart(tick) {
      this.$emit('week', tick)
    },
    calculateBars(measures) {
      return measures
        .map(m => [m.startDate === '12-31-2020' ? 53 : this.$date(m.startDate).week(), m.endDate === '12-31-2020' ? 53 : this.$date(m.endDate).week()])
        .map(d => d[0] > d[1] ? [d[1], d[0]] : d)
        .map(d => [d[0], d[1] > 52 ? 53 : d[1]]);
    },
    barWidth(barData) {
      if(!barData || !barData[1] || !barData[0]) return 0;

      if(barData[1] === barData[0]) {
        return this.xScale(2) - this.xScale(1);
      } else {
        if(barData[0] > barData[1]) {
          return this.xScale(barData[0]) - this.xScale(barData[1]);
        } else {
          return this.xScale(barData[1]) - this.xScale(barData[0]);
        }
      }
    },
    barColor(title) {
      if(title === 'movementRestrictions') return 'red';
      if(title === 'socialDistancing') return 'green';
      if(title === 'quarantineIsolation') return 'blue';
      if(title === 'lockdown') return 'orange';
      return 'yellow';
    }
  }
}
</script>

<style lang="scss" scoped>
  .line {
    fill: none;
    stroke: black;
    stroke-width: 2px;
    stroke-width: 2px;
    transition: .3s;
  }
  path, rect, line {
    transition: .3s ease-in-out;
  }
  .countries {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    button {
      margin-right: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: var(--space-blue);
      color: white;
      font-weight: bold;
      outline: none;
      border: 0px;
      cursor: pointer;
      transition: .3s;
      &.active, &:hover {
        background-color: var(--black-shadow);
      }
    }
  }
  line {
    &.active {
      opacity: 0.4;
    }
  }
</style>