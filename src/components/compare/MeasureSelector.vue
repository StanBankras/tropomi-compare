<template>
  <div class="measure-selector">
    <h2>Which measures do you want to compare?</h2>
    <div class="measures">
      <div
        class="measure"
        v-for="measure in measures" :key="measure.id">
        {{ measure.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    measures() {
      return this.$store.getters.measures;
    }
  }
}
</script>

<style lang="scss" scoped>
.measures {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>