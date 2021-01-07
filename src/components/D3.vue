<template>
  <svg v-if="chartData" :width="chartWidth" :height="chartHeight + 10">
    <rect :width="chartWidth" :height="chartHeight + 10" fill="#F2F2F2"/>
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
      <g class="x-axis" fill="none" transform="translate(20, 0)">
        <g
          v-for="tick in xTicks"
          :key="tick"
          class="tick"
          opacity="1"
          font-size="10"
          font-family="sans-serif"
          text-anchor="middle"
          :transform="`translate(${ xScale(tick) + xPadding * 1 }, ${ - xPadding })`"
        >
          <line :opacity="tick === 0 ? 1 : 0.1" stroke="currentColor" x1="0" x2="0" y1="0" :y2="chartHeight - yPadding * 2"></line>
          <text opacity="0.7" fill="currentColor" dy="0.32em" :y="chartHeight - 25">{{ tick }}</text>
        </g>
      </g>
      <g :transform="`translate(${ xPadding * 2 }, ${ - yPadding })`">
        <path class="line" :d="line(chartData)"/>
      </g>
    </g>
    <linearGradient id="svgGradient" x1="0%" x2="0%" :y1="`${ 100 - (chartHeight - yPadding * 2 - yScale(0)) / (chartHeight - yPadding * 2) * 100 }%`" y2="100%">
      <stop class="start" offset="0%" stop-color="#FF6363" stop-opacity="1"/>
      <stop class="end" offset="0%" stop-color="#6BA1FF" stop-opacity="1"/>
    </linearGradient>
  </svg>
  <button @click="selectedCountry = countryCode" v-for="countryCode in Object.keys(no2PerCountry)" :key="countryCode">{{ countryCode }}</button>
</template>

<script>
import { scaleLinear, line } from 'd3';

export default {
  computed: {
    maxValue() {
      return Math.max(...this.chartData.map(d => d[1]));
    },
    minValue() {
      return Math.min(...this.chartData.map(d => d[1]));
    },
    yScale() {
      return scaleLinear()
       .range([0, this.chartHeight - this.yPadding * 2])
       .domain([this.maxValue, this.minValue]);
    },
    xScale() {
      return scaleLinear()
       .domain([1, 53])
       .range([0, this.chartWidth - this.xPadding * 3]);
    },
    yTicks() {
      return this.yScale.ticks(20);
    },
    xTicks() {
      return this.xScale.ticks(53);
    },
    line() {
      return line()
        .x(d => this.xScale(d[0]))
        .y(d => this.yScale(d[1]));
    },
    no2PerCountry() {
      return this.$store.getters.no2PerCountry;
    },
    chartData() {
      const country = this.selectedCountry;
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
    }
  },
  data() {
    return { 
      chartWidth: 500,
      chartHeight: 400,
      yPadding: 20,
      xPadding: 20,
      selectedCountry: 'IT'
    }
  },
  mounted() {
    this.$store.dispatch('getNO2Data');
    this.chartWidth = window.innerWidth - 50;
    window.addEventListener('resize', () => this.onResize());
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize());
  },
  methods: {
    onResize() {
      this.chartWidth = window.innerWidth - 50;
    }
  }
}
</script>

<style lang="scss" scoped>
  .line {
    fill: none;
    stroke: black;
    stroke-width: 2px;
    stroke: url(#svgGradient);
    stroke-width: 2px;
    transition: .3s;
  }
</style>