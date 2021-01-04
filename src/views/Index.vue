<template>
  <header-comp/>
  <header-comp/>
  <header-comp/>
  <header-comp/>
  <header-comp/>
  <header-comp/>
</template>

<script>
import HeaderComp from '@/components/Header';

export default {
  components: {
    HeaderComp
  },
  mounted() {
    console.log('started');
  }
}
</script>