<template>
<<<<<<< HEAD
  <d3/>
  <header-comp/>
  <explanation/>
  <compare/>
  <chart/>
=======
  <div id="content">
    <d3/>
    <header-comp/>
    <explanation/>
    <compare/>
    <chart/>
  </div>
>>>>>>> 31ce8ca5c9694efc7c77d6e88637ec7ba3bcefbc
</template>

<script>
import HeaderComp from '@/components/Header';
import Explanation from '@/components/explanation/Index';
import Compare from '@/components/compare/Index';
import Chart from '@/components/Chart';
import D3 from '@/components/D3';

export default {
  components: {
    Compare, HeaderComp, Explanation, Chart, D3
<<<<<<< HEAD
  },
  computed:{
     coronaMeasures(){
       return this.$store.getters.coronaMeasures
     }
=======
>>>>>>> 31ce8ca5c9694efc7c77d6e88637ec7ba3bcefbc
  }
}
</script>
