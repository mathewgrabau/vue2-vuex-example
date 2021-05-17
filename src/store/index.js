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
      {
        type: 'nonfiction', title: 'Truth about Cats', pages: 200
      },
      {
        type: 'nonfiction', title: 'Truth about Dogs', pages: 100
      },
      {
        type: 'fiction', title: 'The Cat Said Meow', pages: 400
      },
      {
        type: 'fiction', title: 'The Last Dog', pages: 600
      },
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
    }
  },
  actions: {
  },
  modules: {
  }
})
