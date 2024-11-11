import { createStore } from "redux";
import todoReducer from "./Redux_reducer";

const Store = createStore(todoReducer);
export default Store

