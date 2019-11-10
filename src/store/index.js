import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cards: null
  },
  mutations: {
    set(state, { type, items }) {
      state[type] = items;
    }
  },
  actions: {
    setCards({ commit }, cardsFilePath) {
      fetch(cardsFilePath)
        .then(response => response.json())
        .then(json => {
          commit("set", { type: "cards", items: json.cards });
        });
    }
  },
  getters: {
    getCards: state => {
      return state.cards;
    },
    getCardById: state => id => {
      return state.cards.find(card => card.id === parseInt(id));
    },
    getCardChild: (state, getters) => (id, childId) => {
      return getters
        .getCardById(id)
        .childs.find(card => card.id === parseInt(childId));
    }
  }
});

export default store;
