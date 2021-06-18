import { combineReducers } from "redux";
import changeReducer from "./reducer";

const rootReducer = combineReducers({
  change: changeReducer,
});
export default rootReducer;

