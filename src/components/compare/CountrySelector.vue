<template>
  <div class="country-selector">
    <div class="countries">
      <div
        @click="$emit('select', country.countryCode)"
        class="country"
        v-for="country in countries" :key="country.countryCode">
        <img :src="`https://purecatamphetamine.github.io/country-flag-icons/3x2/${ country.countryCode }.svg`"/>
        <p>{{ country.city }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['countries']
}
</script>

<style lang="scss" scoped>
.country-selector {
  .countries {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    .country {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      padding: 2rem;
      &:hover {
        img {
          box-shadow: 0 5px 4px rgba(0, 0, 0, 0.4);
        }
      }
      img {
        max-width: 75px;
        border-radius: 10px;
        margin-bottom: 1rem;
        border: 1px solid rgb(211, 211, 211);
      }
    }
  }
}
</style>