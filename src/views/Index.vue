<template>
  <div id="content">
    <header-comp/>
    <explanation/>
    <tutorial @scrollTo="scroll"/>
    <div id="tool">
      <compare/>
    </div>
    <button @click="download">download</button>
		<sources/>
  </div>
</template>

<script>
import HeaderComp from '@/components/Header';
import Explanation from '@/components/explanation/Index';
import Compare from '@/components/compare/Index';
import Tutorial from '@/components/explanation/Tutorial';
import Sources from '@/components/sources/Sources';

import { toPng } from 'html-to-image';

export default {
  components: {
    Compare, HeaderComp, Explanation, Tutorial, Sources
  },
  methods: {
    scroll() {
      document.querySelector('#tool').scrollIntoView({ behavior: "smooth" });
    },
    download() {
      toPng(document.getElementById('tool'))
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = 'no2-city-comparison.jpeg';
        link.href = dataUrl;
        link.click();
      });
    }
  }
}
</script>
