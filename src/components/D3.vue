<template>
  <svg :width="chartWidth" :height="400">
    <rect :width="chartWidth" :height="400" fill="#F2F2F2"/>
    <path class="line" :d="line(chartData)"/>
    <rect height="2px" :width="chartWidth" :transform="`translate(${ yScale(maxValue) }, 0)`"/>
  </svg>
  {{ yScale(maxValue) }} {{ maxValue }}
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
       .range([0, 400])
       .domain([this.maxValue, this.minValue]);
    },
    xScale() {
      return scaleLinear()
       .domain([1, 53])
       .range([0, this.chartWidth]);
    },
    line() {
      return line()
        .x(d => this.xScale(d[0]))
        .y(d => this.yScale(d[1]));
    }
  },
  data() {
    return { 
      chartWidth: 500,
      chartData: []
    }
  },
  async mounted() {
    this.chartWidth = window.innerWidth - 50;
    window.addEventListener('resize', () => this.onResize());
    
    const data = await fetch('./json/no2/milan.json').then(res => res.json());
    let values = [];

    for(let i = 0; i + Math.floor(data.length / 2) < data.length; i++) {
      let a = data[i].number;
      let b = data[i + Math.floor(data.length / 2)].number;
      if(a < 0) a = 0;
      if(b < 0) b = 0;
      values.push([i + 1, (b - a) / a * 100]);
    }

    this.chartData = values;
    console.log(values);
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
  }
</style>