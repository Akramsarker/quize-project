import Vuex from 'vuex'

const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state: {
      totalResult: 0,
      totalTime: 0,
    },
    getters: {},
    mutations: {
      setResult(state, payload) {
        state.totalResult = payload
      },
      setTotalTime(state, payload) {
        state.totalTime = payload
      },
    },
    actions: {
      addResult({ commit }, totalResult) {
        commit('setResult', totalResult)
      },
      totalTime({ commit }, totalTime) {
        commit('setTotalTime', totalTime)
      },
    },
  })
}

export default createStore
