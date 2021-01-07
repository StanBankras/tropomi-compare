<template>
  <div id="content">
    <d3/>
    <header-comp/>
    <explanation/>
    <compare/>
    <chart/>
  </div>
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
  }
}
</script>