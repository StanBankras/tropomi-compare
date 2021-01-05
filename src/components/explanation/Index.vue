<template>
  <div id="explanation">
    <sentinel5/>
  </div>
</template>

<script>
import Sentinel5 from './Sentinel5';

export default {
  components: {
    Sentinel5
  }
}
</script>

<style lang="scss" scoped>
  #explanation {
    background-color: var(--bg-dark);
  }
</style>