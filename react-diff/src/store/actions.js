import * as actionTypes from './actionTypes';

export const changeAuthType=(authType)=>(dispatch)=>{
  dispatch({
    type:actionTypes.CHANGE_AUTH_TYPE,
    payload:authType
  })
}