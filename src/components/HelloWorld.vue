<template>
  <div class="hello">
    <h1>{{ number }} - {{ modifiedNumber }}</h1>
    <button @click="addOne()">Add</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      number: 0
    }
  },
  methods: {
    addOne() {
      this.number += 1;
    }
  },
  computed: {
    modifiedNumber() {
      return this.number * 2;
    },
    storeNumber() {
      return this.$store.getters.number;
    }
  },
  watch: {
    number(newVal, oldVal) {
      console.log(oldVal, newVal);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
