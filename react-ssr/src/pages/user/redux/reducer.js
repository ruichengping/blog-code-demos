import {CHANGE_USERS} from  './actionTypes';
const initialState = {
  users:[]
}
export default (state = initialState, action)=>{
  const {type,payload} = action;
  switch (type) {
    case CHANGE_USERS:
      return {
        ...state,
        users:payload
      }
    default:
      return state;
  }
}