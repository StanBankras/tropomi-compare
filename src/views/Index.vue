<template>
  <div id="content">
    <div v-if="Object.keys(measuresPerCountry).length > 0" class="wrap">
      <d3
        @week="week => selectedWeek = week"
        @measure="m => measure = m"
        @country="c => countryA = c"
        :country="countryA"
        :measures="measuresPerCountry[countryA]"
        :minMax="no2MinMax"
        :zoomMeasure="measure"
        :week="selectedWeek"
        :width="windowWidth / 2"
        :id="1"/>
      <d3
        @week="week => selectedWeek = week"
        @measure="m => measure = m"
        @country="c => countryB = c"
        :country="countryB"
        :measures="measuresPerCountry[countryB]"
        :minMax="no2MinMax"
        :zoomMeasure="measure"
        :week="selectedWeek"
        :width="windowWidth / 2"
        :id="2"/>
    </div>
    <header-comp/>
    <explanation/>
    <compare/>
  </div>
</template>

<script>
import HeaderComp from '@/components/Header';
import Explanation from '@/components/explanation/Index';
import Compare from '@/components/compare/Index';
import D3 from '@/components/D3';

export default {
  components: {
    Compare, HeaderComp, Explanation, D3
  },
  computed: {
    no2PerCountry() {
      return this.$store.getters.no2PerCountry;
    },
    measuresPerCountry() {
      return this.$store.getters.measuresPerCountry || [];
    }
  },
  data() {
    return {
      selectedWeek: 1,
      windowWidth: 500,
      measures: [0, 0],
      measure: undefined,
      no2MinMax: [0, 0],
      countryA: 'IT',
      countryB: 'IT'
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.addEventListener('resize', () => this.onResize());
    this.$store.dispatch('getNO2Data');
    this.$store.dispatch('getMeasures');
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize());
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    no2Values(country) {
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
    minMax(data) {
      return [Math.max(...data.map(d => d[1])), Math.min(...data.map(d => d[1]))];
    },
    updateData() {
      const values = [this.countryA, this.countryB].map(c => this.no2Values(c));
      if(!values) return;

      let minMax = values.map(v => this.minMax(v));
      minMax = [Math.max(minMax[0][0], minMax[1][0]), Math.min(minMax[0][1], minMax[1][1])];

      if(!isFinite(minMax[0] || !isFinite(minMax[1]))) return;

      this.no2MinMax = minMax;
    }
  },
  watch: {
    countryA() {
      this.updateData();
    },
    countryB() {
      this.updateData();
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
}
</style>
