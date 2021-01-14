<template>
  <div id="compare">
    <div class="select">
      <h2>Choose a COVID-19 measure to zoom in to</h2>
      <div class="labels">
        <div
          @click="measure === label ? measure = undefined : measure = label"
          class="label"
          :class="{ active: measure === label }"
          v-for="label in labels"
          :key="label">
          <div class="circle" :style="`background-color: ${barColor(label)}`"></div>
          <p>{{ label.replace(/([a-z])([A-Z])/g, '$1 $2') }}</p>
        </div>
      </div>
    </div>
    <div v-if="Object.keys(measuresPerCountry).length > 0" class="wrap">
      <div>
        <button v-if="countryA" class="change-city" @click="countryA = undefined">Change city</button>
        <d3
          v-if="countryA"
          @week="week => selectedWeek = week"
          @measure="m => measure = m"
          @country="c => countryA = c"
          :country="countryA"
          :measures="measuresPerCountry[countryA]"
          :minMax="no2MinMax"
          :domain="zoomDomain"
          :zoomMeasure="measure"
          :week="selectedWeek"
          :width="windowWidth / 2 - 48"
          :id="1"/>
        <country-selector @select="c => countryA = c" :countries="countryB ? countries.filter(c => c.countryCode !== countryB) : countries" v-else/>
      </div>
      <div class="border"></div>
      <div>
        <button v-if="countryB" class="change-city" @click="countryB = undefined">Change city</button>
        <d3
          v-if="countryB"
          @week="week => selectedWeek = week"
          @measure="m => measure = m"
          @country="c => countryB = c"
          :country="countryB"
          :measures="measuresPerCountry[countryB]"
          :minMax="no2MinMax"
          :domain="zoomDomain"
          :week="selectedWeek"
          :width="windowWidth / 2 - 48"
          :id="2"/>
        <country-selector @select="c => countryB = c" :countries="countryA ? countries.filter(c => c.countryCode !== countryA) : countries" v-else/>
      </div>
    </div>
  </div>
</template>

<script>
import D3 from '@/components/D3';
import CountrySelector from './CountrySelector';

export default {
  components: {
    D3, CountrySelector
  },
  computed: {
    countries() {
      return this.$store.getters.countries;
    },
    no2PerCountry() {
      return this.$store.getters.no2PerCountry;
    },
    measuresPerCountry() {
      return this.$store.getters.measuresPerCountry || [];
    },
    zoomDomain() {
      if(this.measure) {
        const countryA = this.countryA ? this.measuresPerCountry[this.countryA] : [{}];
        const countryB = this.countryB ? this.measuresPerCountry[this.countryB] : [{}];
        if(!countryA[0][this.measure]) countryA[0][this.measure] = { color: 'red', measures: [] };
        if(!countryB[0][this.measure]) countryB[0][this.measure] = { color: 'red', measures: [] };

        const measures = [...countryA[0][this.measure].measures, ...countryB[0][this.measure].measures];
        const mappedWeeks = measures
          .map(m => [m.startDate === '12-31-2020' ? 53 : this.$date(m.startDate).week(), m.endDate === '12-31-2020' ? 53 : this.$date(m.endDate).week()])
          .map(d => d[0] > d[1] ? [d[1], d[0]] : d)
          .map(d => [d[0], d[1] > 52 ? 52 : d[1]]);
          
        return [mappedWeeks.sort((a, b) => a[0] - b[0])[0][0], mappedWeeks.sort((a, b) => b[1] - a[1])[0][1] + 1];
      }
      return [1,53];
    },
    labels() {
      const countryA = this.measuresPerCountry[this.countryA];
      const countryB = this.measuresPerCountry[this.countryB];

      return [...new Set([...Object.keys((countryA || [{}])[0]), ...Object.keys((countryB || [{}])[0])])];
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
    this.$store.dispatch('getNO2Data');
    this.$store.dispatch('getMeasures');
  },
  methods: {
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
    },
    barColor(title) {
      if(title === 'movementRestrictions') return 'red';
      if(title === 'socialDistancing') return 'green';
      if(title === 'quarantineIsolation') return 'blue';
      if(title === 'lockdown') return 'orange';
      return 'yellow';
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
#compare {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrap {
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1px 1fr;
  gap: 4rem;
  max-width: 1600px;
  width: calc(100% - 2rem);
  margin: 0 2rem;
  margin-bottom: 2rem;
  margin-bottom: 100vh;
  .change-city {
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: var(--space-blue);
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: .3s;
    &:hover {
      background-color: var(--space-blue-light);
    }
  }
  .border {
    height: 100%;
    border-right: 4px dashed black;
    @media(max-width: 1150px) {
      display: none;
    }
  }
  @media(max-width: 1300px) {
    gap: 2rem;
  }
  @media(max-width: 1150px) {
    grid-template-columns: 1fr;
    > div {
      padding: 1rem 0 !important;
    }
  }
  > div {
    max-width: 100%;
    overflow: auto;
    width: 100%;
    padding: 4rem 0;
  }
}
.select {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  width: 100vw;
  h2 {
    margin-bottom: 2rem;
  }
  .labels {
    display: flex;
    flex-wrap: wrap;
    .label {
      padding: 0.5rem 2rem;
      background-color: var(--label-bg);
      margin-right: 1rem;
      border-radius: 30px;
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      border: 2px solid transparent;
      transition: .5s;
      margin-bottom: 1rem;
      &.active {
        border: 2px solid black;
      }
      p {
        text-transform: capitalize;
      }
      .circle {
        height: 16px;
        width: 16px;
        border-radius: 30px;
        margin-right: 1rem;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>