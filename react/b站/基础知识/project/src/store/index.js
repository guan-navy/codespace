import { combineReducers, legacy_createStore as crecreateStore } from "redux";
// dispatch({type:'changeMsg', payload:'hello'})
// playload 表示的是传递的参数
//  一定要return state 并且展开解除引用
function msgReducer(state={msg:'hello'}, action) {
  switch (action.type) {
    case 'changeMsg':
      return {
       ...state,
        msg: action.payload
      }
    case'resetMsg':
      
      return {
       ...state,
        msg: 'hello'
      }
    default:
      return state;
  }
}
function numReducer(state={num:0}, action) {
  switch (action.type) {
    case 'addNum':
      return {
    ...state,
        num: state.num + action.payload
      }
    case'resetNum':

      return {
    ...state,
        num: 0
      }
    default:
      return state;
  }
}
const reducer = combineReducers({
   msgReducer,
   numReducer,
});
const store = crecreateStore(reducer);
export default store;