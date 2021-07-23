import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addProductToCart(state, payload) {
      console.log("state: ", state);
      console.log("payload: ", payload);
      let check = true;

      state.cart.forEach((element) => {
        if (element.id === payload.id) {
          element.value = payload.value;
          check = false;
        }
      });
      if (check) {
        state.cart.push(payload);
      }
      console.log(" state.cart: ", state.cart);
    },
    removeProductToCart(state, payload) {
      if (!payload.item) {
        return;
      }
      state.cart = [...this.cart.filter((v) => v.id !== payload.item.id)];
    },
  },
  actions: {},
  modules: {},
});
