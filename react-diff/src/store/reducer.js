import * as actionTypes from './actionTypes';
const initialState={
  authType:'manager'
}

export default (state=initialState,actions)=>{
  const {type,payload}=actions;
  switch(type){
    case actionTypes.CHANGE_AUTH_TYPE:
      return Object.assign({},initialState,{authType:payload});
      break;
    default:
      return state;
  }
}