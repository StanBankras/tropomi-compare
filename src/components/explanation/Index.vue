<template>
  <div id="explanation">
    <sentinel5/>
    <globeZoom/>
  </div>
</template>

<script>
import Sentinel5 from './Sentinel5';
import GlobeZoom from './GlobeZoom';

export default {
  components: {
    Sentinel5,
    GlobeZoom
  }
}
</script>

<style lang="scss" scoped>
  #explanation {
    background-color: var(--bg-dark);
  }
</style>