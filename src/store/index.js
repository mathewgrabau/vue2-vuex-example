import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstName: 'Mathew',
    lastName: 'Grabau',
    favoriteColor: 'purple',
    profession: 'engineer',
    dogCount: 1,
    books: [
    ]
  },
  getters: {
    name(state) {
      return `${state.firstName} ${state.lastName}`
    },
    fiction(state) {
      return state.books.filter(book => book.type === 'fiction')
    },
    nonfiction(state) {
      return state.books.filter(book => book.type === 'nonfiction')
    },
    booksByMaxPages(state) {
      return function (pages) {
        return state.books.filter(book => book.pages <= pages)
      }
    }
  },
  mutations: {
    addDog(state) {
      state.dogCount++;
    },
    removeDog(state) {
      if (state.dogCount > 0) {
        state.dogCount--;
      }
    },
    setBooks(state, books) {
      state.books = books
    }
  },
  actions: {
    loadBooks(context) {
      fetch('/data/books.json')
        .then(res => res.json())
        .then(res => {
          context.commit('setBooks', res)
        });
    }
  },
  modules: {
  }
})
