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
    //修改头像
    modifyUserImg(state,val){
        state.userImg = val
    },
    //修改id
    modifyUserId(state,val){
        state.userId = val
    },
    //修改手机
    modifyUserPhone(state,val){
        state.userPhone = val
    }
            
}

const actions = {
    //修改昵称
    modifyName(context,val){
        context.commit('modifyUserName',val)
    },
    //登录
    login(context,{name,userid,imgPath,userPhone}){
        context.commit('modifyUserName',name)
        context.commit('modifyUserImg',imgPath || 'imgs/ios/images/Mine/mineDefaultImg.png')
        context.commit('modifyUserId',userid)
        context.commit('modifyUserPhone',userPhone)
    },
    //退出登录
    loginOut(context){
        context.commit('modifyUserName','暂无昵称')
        context.commit('modifyUserImg','imgs/ios/images/Mine/mineDefaultImg.png')
        context.commit('modifyUserId',null)
        context.commit('modifyUserPhone',null)
    }
}
export default {
    state,
    getters,
    mutations,
    actions,
    namespaced:true
}