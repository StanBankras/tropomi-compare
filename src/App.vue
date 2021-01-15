<template>
  <router-view/>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('setCovidMeasures');
    this.$store.dispatch('getFlightData');
  }
}
</script>