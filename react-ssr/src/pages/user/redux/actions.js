import {CHANGE_USERS} from './actionTypes';
export const changeUsers = (users)=>(dispatch,getState)=>{
  dispatch({
    type:CHANGE_USERS,
    payload:users
  });
}