import Vue from 'vue'
import Vuex from 'vuex'

const state = {
    userName:'暂无昵称',
    userId:null,
    userImg:'imgs/ios/images/Mine/mineDefaultImg.png',
    userPhone:null
}

const getters = {
    userLogin(state){
        if(state.userId){
            return true
        }else{
            return false
        }
    }
}

const mutations = {
    //修改昵称
    modifyUserName(state,val){
        state.userName = val
    },
    modifyUserImg(state,val){
        
    }
            
}

const actions = {
    modifyName(context,val){
        context.commit('modifyUserName',val)
    }
}
export default {
    state,
    getters,
    mutations,
    actions,
    namespaced:true
}