const MINE_LOGIN = '/user/Sign in'
/*
登录
    请求类型：post请求
    参数:
        id:房屋编号
        username:账号
        password:密码
        Phone:手机号
*/ 

const MINE_REGISTER = '/user/register'
/*
注册
    请求类型：post请求
    参数:
        id:房屋编号
        username:账号
        password:密码
        Phone:手机号
*/ 



const MINE_COMMENT = '/commentController/queryCommentByUid/uid'
/*
我的评论
    请求类型：GET请求
    参数
        uid:用户id
*/ 

const MINE_ENSHRINE = '/houseController/queryHouseCollectByUid/uid/currentPag'
/*
我的收藏
    请求类型：GET请求
    参数
        uid:用户id
        currentPage:页数
*/ 
const MINE_SHARE = '/user/share/getShare'
/*
我的分享
    请求类型：GET请求
    参数:
        id:用户id
        page:页数
        cow:每一页条数
*/ 




const MINE_ADDENTRUST = '/weituo/addweituo'
/*
添加房屋委托
    请求类型：post请求
    参数
        id:用户id
        from表单:修改后应提交的委托表单
*/ 
const MINE_GETENTRUST = '/weituo/querByUid'
/*
获取用户委托
    请求类型：post请求
    参数:
        id:用户id
*/ 
const MINE_MODIFYENTRUST = '/weituo/toupdate'
/*
修改委托
    请求类型：post请求
    参数:
        id:用户id
        from表单:修改后应提交的委托表单
*/ 


const MINE_PUBLISH = '/user/house/getHouse'
/*
我的发布
    请求类型：GET请求
    参数
        参数巨多看文档
*/ 




const MINE_CONTRACTLIST = '/hetong/hetongList'
/*
获取合同列表
    请求类型：post请求
    参数
        id:用户id
*/ 
const MINE_GETCONTRACT = '/hetong/queryByid'
/*
获取单条合同
    请求类型：post请求
    参数
        id:合同id
*/
const MINE_ADDCONTRACT = 'hetong/addHetong' 
/*
添加合同
    请求类型：post请求
    参数
        id:用户id
        form表单，添加的合同表单
*/  
const MINE_MODIFYCONTRACT = 'hetong/update'
/*
修改合同
    请求类型：post请求
    参数
        id:合同id
        form表单:修改后的合同表单
*/ 


const MINE_MONEY = '/walletController/queryWallentByUid/'
/*
我的钱包
    请求类型：GET请求
    参数
        uid:用户id
*/ 


export default {
    MINE_ADDCONTRACT,
    MINE_ADDENTRUST,
    MINE_COMMENT,
    MINE_CONTRACTLIST,
    MINE_ENSHRINE,
    MINE_GETCONTRACT,
    MINE_GETENTRUST,
    MINE_LOGIN,
    MINE_MODIFYCONTRACT,
    MINE_MODIFYENTRUST,
    MINE_MONEY,
    MINE_PUBLISH,
    MINE_REGISTER,
    MINE_SHARE
}