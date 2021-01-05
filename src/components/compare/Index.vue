<template>
  <div id="compare">
    <measure-selector/>
    <country-selector/>
  </div>
</template>

<script>
import MeasureSelector from './MeasureSelector';
import CountrySelector from './CountrySelector';

export default {
  components: {
    CountrySelector, MeasureSelector
  }
}
</script>