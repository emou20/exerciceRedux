import { ADD_ARTICLE } from "../constants/action-types";


function rootReducer(state, action) {
  console.log(action.type);
  if (action.type === ADD_ARTICLE) {
   state.articles.push({title:action.title })
   console.log("state Reducer", state.articles )
   return state;
  } 
  
  return state;
}

export default rootReducer;