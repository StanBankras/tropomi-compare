<template>
  <div id="content">
    <div class="wrap">
      <d3
        @week="week => selectedWeek = week"
        @measures="m => measures[0] = m"
        @measure="m => measure = m"
        :zoomMeasure="measure"
        :week="selectedWeek"
        :width="windowWidth / 2"
        :id="1"/>
      <d3
        @week="week => selectedWeek = week"
        @measures="m => measures[1] = m"
        @measure="m => measure = m"
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
  data() {
    return {
      selectedWeek: 1,
      windowWidth: 500,
      measures: [0, 0],
      measure: undefined
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.addEventListener('resize', () => this.onResize());
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize());
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
}
</style>
