import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import user from './reducer';

const rootReducer = combineReducers({
  user
})

const store=createStore(
  rootReducer,
  applyMiddleware(thunk)
)
export default store;