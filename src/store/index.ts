import { createStore } from 'vuex'

export default createStore({
  state: {
    token: localStorage.getItem('token') || '',
    user: null as any
  },
  mutations: {
    setToken(state, token: string) {
      state.token = token
      localStorage.setItem('token', token)
    },
    setUser(state, user: any) {
      state.user = user
    },
    logout(state) {
      state.token = ''
      state.user = null
      localStorage.removeItem('token')
    }
  },
  actions: {
    login({ commit }, token: string) {
      commit('setToken', token)
    },
    logout({ commit }) {
      commit('logout')
    },
    async fetchUser({ commit }) {
      const token = localStorage.getItem('token')
      if (token) {
        // Fetch user data from the API using the token
        const response = await fetch('/api/user', {
          headers: { Authorization: `Bearer ${token}` }
        })
        const user = await response.json()
        commit('setUser', user)
      }
    }
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token
    },
    getUser(state) {
      return state.user
    }
  }
})
