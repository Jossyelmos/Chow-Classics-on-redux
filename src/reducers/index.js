import { combineReducers } from "redux";
import recipeReducer from './recipeReducer.js';

export default combineReducers({
    recipe: recipeReducer,
});