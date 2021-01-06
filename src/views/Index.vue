<template>
  <header-comp/>
  <explanation/>
  <compare/>
  <chart/>
</template>

<script>
import HeaderComp from '@/components/Header';
import Explanation from '@/components/explanation/Index';
import Compare from '@/components/compare/Index';
import Chart from '@/components/Chart';

export default {
  components: {
    Compare, HeaderComp, Explanation, Chart
  }
}
</script>