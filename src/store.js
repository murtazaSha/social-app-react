import { createStore } from "redux";
import rootReducer from "./components/Reducers/RootReducer";

const store=createStore(rootReducer);

export default store;