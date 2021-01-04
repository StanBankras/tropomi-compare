import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "Vue"
    }
  },
  getters: {
    name: state => state.name
  }
});

export default store;