import { legacy_createStore as crecreateStore } from "redux";
function mesReducer(state={msg:'hello'}, action) {
  switch (action.type) {
    case 'changeMsg':
      return {
       ...state,
        msg: action.payload
      }
    case'resetMsg':
      
      return {
       ...state,
        msg: action.payload
      }
    default:
      return state;
  }
}
const store = crecreateStore(mesReducer, 0);
export default store;