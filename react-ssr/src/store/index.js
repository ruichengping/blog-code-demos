import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import user from '@/pages/user/redux/reducer';

const rootReducer = combineReducers({
  user
});
export default (initialState) => {
  return createStore(rootReducer,initialState,applyMiddleware(thunk))
};