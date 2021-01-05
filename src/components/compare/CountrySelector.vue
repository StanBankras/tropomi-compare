<template>
  <div class="country-selector">
    <div class="countries">
      <div
        class="country"
        v-for="country in countries" :key="country.countryCode">
        <img :src="`https://purecatamphetamine.github.io/country-flag-icons/3x2/${ country.countryCode }.svg`"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    countries() {
      return this.$store.getters.countries;
    }
  }
}
</script>

<style lang="scss" scoped>
.country-selector {
  .countries {
    .country {
      img {
        max-width: 50px;
        border-radius: 3px;
        margin-bottom: 1rem;
        margin-left: 1rem;
      }
    }
  }
}
</style>