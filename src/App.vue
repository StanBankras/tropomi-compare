<template>
  <router-view/>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('setCovidMeasures');
    this.$store.dispatch('getFlightData');
    this.$store.dispatch('getTrafficData');
    this.$store.dispatch('setExtremes');
    this.$store.dispatch('getStringencyIndices');
  }
}
</script>