<template>
  <header-comp/>
  <explanation/>
  <compare/>
</template>

<script>
import HeaderComp from '@/components/Header';
import Explanation from '@/components/explanation/Index';
import Compare from '@/components/compare/Index';

export default {
  components: {
    Compare, HeaderComp, Explanation
  }
}
</script>