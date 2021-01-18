<template>
  <div v-if="country && chartData.length > 0">
    <div ref="chart" class="chart" :id="`chart-${id}`">
      <div class="header">
        <div style="display: flex; align-items: center">
          <img :src="`https://purecatamphetamine.github.io/country-flag-icons/3x2/${ fullCountry.countryCode }.svg`"/>
          <h3>{{ fullCountry.city }}</h3>
        </div>
        <div class="labels">
          <div @click="editLabel('no2')" :class="{ inactive: !labels.includes('no2') }" class="label">
            <img src="@/assets/img/no2_label.svg" alt="">
            <p>NO2 Emission difference</p>
          </div>
          <div @click="editLabel('flights')" :class="{ inactive: !labels.includes('flights') }" class="label">
            <img src="@/assets/img/flights_label.svg" alt="">
            <p>Amount of flights difference</p>
          </div>
          <div @click="editLabel('traffic')" :class="{ inactive: !labels.includes('traffic') }" class="label">
            <img src="@/assets/img/traffic_label.svg" alt="">
            <p>Road congestion difference</p>
          </div>
        </div>
      </div>
      <svg v-if="chartData" :width="chartWidth" :height="chartHeight + 10">
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
              :x="(!barData.weeks || !barData.weeks[0] || !barData.weeks[1] ? 1 : xScale(barData.weeks[0] > barData.weeks[1] ? barData.weeks[1] : barData.weeks[0])) + 0.5 * xPadding"
              :y="chartHeight - xPadding * 2 - barHeight * (i + 1) - i * 5"
              :height="barHeight"
              :width="Math.max(barWidth(barData.weeks), xScale(15) - xScale(14))"
              :rx="barHeight / 2"
              :fill="barColor(bar.title)"
              style="cursor: pointer;"
              opacity="0.4"
              v-for="barData in bar.fromTo" :key="barData"/>
          </g>
          <g :transform="`translate(${ xPadding * 0.5 }, ${ 0 })`">
            <path v-if="labels.includes('flights')" class="line" style="stroke: purple; opacity: 0.4" :d="line(slicedFlightData)"/>
            <path v-if="labels.includes('no2')" class="line" :style="`stroke: url(#svgGradient-${id})`" :d="line(slicedChartData)"/>
            <path v-if="labels.includes('traffic')" class="line" style="stroke: green; opacity: 0.4" :d="line(slicedTrafficData)"/>
            <g
              class="extremes"
              v-for="extreme in extremeValues"
              :key="extreme.week">
              <path
                v-if="extreme.week >= domain[0] && extreme.week <= domain[1]"
                d="M11.433,3l2.606,5.279,5.827.852L15.65,13.238l1,5.8L11.433,16.3,6.221,19.04l1-5.8L3,9.131l5.827-.852Z"
                fill="#7a7a7a"
                stroke="#7a7a7a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                style="cursor: pointer;"
                :transform="`translate(${xScale(extreme.week) - 8}, ${Number(line([chartData.find(c => c[0] === extreme.week - 1), chartData.find(c => c[0] === extreme.week), chartData.find(c => c[0] === extreme.week + 1)]).split(',')[8]) - 4})`">
                <title>{{ extreme.text }}</title>
              </path>
            </g>
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
              <text opacity="0.7" fill="currentColor" x="-4" dy="0.32em">{{ tick }}</text>
            </g>
            <text :x="-chartHeight / 2" y="-10" fill="currentColor" style="font-size: 11px;" transform="rotate(270)">Change in % in 2020 vs 2019</text>
          </g>
          <g class="x-axis" fill="none" :transform="`translate(${ yPadding * 0.5 + 20 }, 0)`">
            <g
              v-for="(month, i) in months"
              :key="month"
              class="tick"
              opacity="1"
              font-size="10"
              font-family="sans-serif"
              text-anchor="middle"
              :transform="`translate(${ xMonths(i + 1) + xPadding * 1 }, ${ - xPadding })`"
            >
              <line
                opacity="0.03"
                stroke="currentColor"
                stroke-width="2"
                x1="0"
                x2="0"
                y1="0"
                :y2="chartHeight - yPadding * 2"/>
              <text opacity="0.7" fill="currentColor" dy="0.32em" :y="chartHeight - 25">{{ month }}</text>
            </g>
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
                opacity="0"
                class="vertical"
                :class="{ active: week === tick }"
                stroke="currentColor"
                :stroke-width="week === tick ? 1 : 6"
                x1="0"
                x2="0"
                y1="0"
                :y2="chartHeight - yPadding * 2"/>
              <g style="pointer-events: none;" v-if="week === tick">
                <rect fill="#F2F2F2" x="-25" :y="chartHeight - 40" width="50px" height="30px"/>
                <text opacity="0.7" fill="currentColor" dy="0.32em" :y="chartHeight - 25">Week {{ tick }}</text>
              </g>
              <g v-if="week === tick" transform="translate(0, 20)">
                <g style="pointer-events: none;">
                  <rect :fill="chartData.find(x => x[0] === tick)[1] > 0 ? '#FF6363' : '#6BA1FF'" x="-25" y="-10" width="50px" height="20px"/>
                  <text color="white" fill="currentColor" dy="0.32em">{{ (chartData.find(x => x[0] === tick) || [0,0])[1].toFixed(2) }}%</text>
                </g>
                <g style="pointer-events: none;" v-if="flightData.find(f => f[0] === tick)" transform="translate(0, 25)">
                  <rect fill="purple" x="-25" y="-10" width="50px" height="20px"/>
                  <text color="white" fill="currentColor" dy="0.32em">{{ (flightData.find(f => f[0] === tick) || [0,0])[1].toFixed(2) }}%</text>
                </g>
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
          <linearGradient :id="`svgGradient-${id}`" x1="0%" x2="0%" :y1="`${ maxValue / (maxValue + 100) * 100 }%`" y2="100%">
            <stop class="start" offset="0%" stop-color="#FF6363" stop-opacity="1"/>
            <stop class="end" offset="0%" stop-color="#6BA1FF" stop-opacity="1"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="measures">
      <div
        class="category"
        :style="`border-color: ${barColor(category.category)}`"
        v-for="category in activeMeasures" :key="category.id">
        <transition-group name="fade">
          <div class="measure" v-for="measure in category.measures" :key="measure.measure">
            {{ measure.measure }}
          </div>
        </transition-group>
      </div>
    </div>
    {{ labels }}
  </div>
</template>

<script>
import { scaleLinear, line, curveBasis } from 'd3';

export default {
  props: ['week', 'id', 'zoomMeasure', 'minMax', 'measures', 'country', 'domain', 'labels'],
  emits: ['week', 'measure', 'country', 'addlabel', 'removelabel'],
  computed: {
    countries() {
      return this.$store.getters.countries;
    },
    extremes() {
      return this.$store.getters.extremes;
    },
    extremeValues() {
      return this.extremes[0][this.country];
    },
    trafficData() {
      const data =  this.$store.getters.trafficDataPerCountry[this.country] || [];
      return data.map((d, i) => [i, d]);
    },
    fullCountry() {
      return this.countries.find(c => c && c.countryCode === this.country) || { countryCode: 'NL' };
    },
    maxValue() {
      return Math.max(...this.slicedChartData.map(d => d[1]));
    },
    yScale() {
      return scaleLinear()
       .range([0, this.chartHeight * this.multiplier - this.yPadding * 2])
       .domain([this.minMax[0] ? this.minMax[0] : this.maxValue, this.minMax[0] ? this.minMax[1] : -100]);
    },
    xScale() {
      return scaleLinear()
       .domain(this.domain || [1, 53])
       .range([0, this.chartWidth - this.xPadding * 3])
       .clamp(true);
    },
    xMonths() {
      return scaleLinear()
       .domain([1, 12])
       .range([0, this.chartWidth - this.xPadding * 3])
       .clamp(true);
    },
    yTicks() {
      return this.yScale.ticks(8);
    },
    xTicks() {
      let ticks = this.domain ? this.domain[1] - this.domain[0] : 53;

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
    slicedFlightData() {
      return this.flightData.slice(this.domain ? this.domain[0] - 1 : 1, this.domain ? this.domain[1] + 1 : 53);
    },
    slicedTrafficData() {
      return this.trafficData.slice(this.domain ? this.domain[0] - 1 : 1, this.domain ? this.domain[1] + 1 : 53);
    },
    chartWidth() {
      return Math.max(this.width, 500);
    },
    computedBars() {
      if(!this.measures || !this.measures[0]) return [];
      const categories = Object.keys(this.measures[0]);
      const mapped = categories.map(c => {
        return {
          title: c,
          color: this.measures[0][c].color,
          fromTo: this.measures[0][c] ? this.calculateBars(this.measures[0][c].measures, c) : []
        }
      });
      return mapped;
    },
    activeMeasures() {
      return this.computedBars.map((m, i) => {
        return {
          category: m.title,
          measures: m.fromTo.filter(f => this.week >= f.weeks[0] && this.week <= f.weeks[1]),
          id: i
        }
      }).filter(m => m.measures.length > 0);
    },
    flightData() {
      const data = this.$store.getters.flightDataPerCountry[this.country] || [];
      return data.map((d, i) => [i, d]);
    }
  },
  data() {
    return { 
      chartHeight: 400,
      yPadding: 20,
      xPadding: 20,
      multiplier: 0.75,
      barHeight: 13,
      width: 400,
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  },
  mounted() {
    this.width = (this.$refs.chart || { clientWidth: 400 }).clientWidth - 32;
    window.addEventListener('resize', () => this.onResize());
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize());
  },
  methods: {
    onResize() {
      this.width = document.querySelector(`#chart-${this.id}`).clientWidth - 32;
    },
    clickBar(bar) {
      this.$emit('measure', bar.title);
    },
    resetZoom() {
      this.$emit('measure', undefined);
    },
    hoverChart(tick) {
      this.$emit('week', tick)
    },
    calculateBars(measures, category) {
      return measures
        .map(m => {
          return {
            weeks: [m.startDate === '12-31-2020' ? 53 : this.$date(m.startDate).week(), m.endDate === '12-31-2020' ? 53 : this.$date(m.endDate).week()],
            measure: m.measure
          }
        })
        .map(m => {
          return {
            weeks: m.weeks[0] > m.weeks[1] ? [m.weeks[1], m.weeks[0]] : m.weeks,
            measure: m.measure
          }
        })
        .map(m => {
          return {
            weeks: [m.weeks[0], m.weeks[1] > 52 ? 53 : m.weeks[1]],
            measure: m.measure,
            category
          }
        });
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
      if(title === 'movementRestrictions') return '#978BF7';
      if(title === 'socialDistancing') return '#009B72';
      if(title === 'quarantineIsolation') return '#F26430';
      if(title === 'lockdown') return '#2A2D34';
      return '#41C6FC';
    },
    editLabel(label) {
      this.labels.includes(label) ? this.$emit('removelabel', label) : this.$emit('addlabel', label);
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2.5rem;
    justify-content: space-between;
    .labels {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 2rem;
      @media(max-width: 767px) {
        flex-direction: column;
        align-items: flex-start;
        .label {
          margin-bottom: 1rem;
          &:last-child {
            margin: 0;
          }
        }
      }
      .label {
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        &.inactive {
          text-decoration: line-through;
        }
        p {
          font-size: 12px;
        }
      }
    }
    img {
      max-height: 25px;
      margin-right: 1rem;
    }
  }
  .chart {
    background-color: var(--space-blue-light);
    padding: 1rem;
    width: 100%;
    overflow-x: auto;
    border-radius: 20px;
    margin-bottom: 2rem;
  }
  .line {
    fill: none;
    stroke: black;
    stroke-width: 2.5px;
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
    &.vertical {
      transition: 0s !important;
    }
  }
  .measures {
    .category {
      padding: 0.5rem 1.5rem;
      border-left: 10px solid var(--text-box);
      border-radius: 10px;
      margin-bottom: 1rem;
      .measure {
        margin-bottom: 1rem;
        font-size: 14px;
        color: rgb(139, 139, 139);
        line-height: 1.2rem;
        max-width: 40rem;
        &:last-child {
          margin: 0;
        }
      }
    }
  }
  .extremes {
    position: relative;
    z-index: 1000;
  }
</style>