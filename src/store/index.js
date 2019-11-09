import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: null
  },
  mutations: {
    set(state, { type, items }) {
      state[type] = items;
    }
  },
  actions: {
    setCards({ commit }, cards) {
      commit("set", { type: "cards", items: cards });
    }
  },
  getters: {
    getCards(state) {
      return state.cards;
    },
    getCardById: state => id => {
      return state.cards.find(card => card.id === parseInt(id));
    }
  }
});
