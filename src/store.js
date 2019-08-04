import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    detail:{}
  },
  mutations: {
    setList(state,payload){
      state.list = payload
    },
    setDetail(state,payload){
      state.detail=payload
    },
    changeCount(state,payload){
      if(state.detail.id===payload.id){
        if(payload.type==='-'){
          if(state.detail.count===0){
            state.detail.count=0
          }else{
            state.detail.count--
          }
        }else if(payload.type==='+'){
          state.detail.count++
        }
      }
    }
  },
  actions: {
    getList({commit},params){
      axios.get('/list').then(res=>{
        commit('setList',res.data.values)
      })
    },
    getDetail({commit},id){
      axios.get('/detail?id='+id).then(res=>{
        commit('setDetail',res.data.values)
      })
    }
  }
})