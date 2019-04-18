import * as actionTypes from './actionTypes';

function changeOriginAuthTypeByHttp(){
  //用定时器模拟一下
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{
      resolve();
      clearTimeout(timer);
    },2000);
  })
}
export const changeLoadingStatus=(status)=>async (dispatch)=>{
  dispatch({
    type:actionTypes.CHANGE_LOADING_STATUS,
    payload:status
  });
}
export const changeAuthType=(authType)=>async (dispatch)=>{
  dispatch({
    type:actionTypes.CHANGE_LOADING_STATUS,
    payload:true
  });
  await changeOriginAuthTypeByHttp();
  dispatch({
    type:actionTypes.CHANGE_AUTH_TYPE,
    payload:{loading:false,authType}
  });
}