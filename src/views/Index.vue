<template>
  <div id="content">
    <header-comp/>
    <explanation/>
    <tutorial @scrollTo="scroll"/>
    <div id="tool">
      <compare/>
    </div>
  </div>
</template>

<script>
import HeaderComp from '@/components/Header';
import Explanation from '@/components/explanation/Index';
import Compare from '@/components/compare/Index';
import Tutorial from '@/components/explanation/Tutorial';

export default {
  components: {
    Compare, HeaderComp, Explanation, Tutorial
  },
  methods: {
    scroll() {
      document.querySelector('#tool').scrollIntoView({ behavior: "smooth" });
    }
  }
}
</script>
