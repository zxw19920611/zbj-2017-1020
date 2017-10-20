import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count:0
}

const mutations = {
	addCount:function(state){
		state.count++
	}
}

const actions = {
	addCountAct:function({commit}){
		commit("addCount")
	}
}



export default new Vuex.Store({
	state,
	actions,
	mutations
})