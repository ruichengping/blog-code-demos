import * as actionTypes from './actionTypes';
const initialState={
  authType:'manager',
  loading:false
}

export default (state=initialState,actions)=>{
  const {type,payload}=actions;
  switch(type){
    case actionTypes.CHANGE_LOADING_STATUS:
      return Object.assign({},initialState,{loading:payload});
      break;
    case actionTypes.CHANGE_AUTH_TYPE:
      return Object.assign({},initialState,payload);
      break;
    default:
      return state;
  }
}