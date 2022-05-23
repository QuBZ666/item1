// import axios from 'axios'
import Vue from 'vue'
import un from '../../src/public/list.json'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  shuju: [],
  num: 123,
  Id: 1,
  Name: '',
  un
}
const mutations = {
  pu (state, value) {
    // value += value
    state.Id += 1
    state.shuju.push({
      ...value,
      Id: value,
      Name: state.Name

    })
    console.log(state.shuju)
    state.num += value
  },
  mess (state, value) {
    state.shuju = state.un
    console.log(state.un)
  }

}
const actions = {
  getlist (a) {
    console.log(1)
    // console.log(state.un)
    // axios.get(state.un).then(({data}) => {
    //   console.log(data)
    // })
    // axios.get('/list.json').then(({data}) => {
    //   console.log(data)
    // })
  }
}
export default new Vuex.Store({
  actions,
  mutations,
  state
})
