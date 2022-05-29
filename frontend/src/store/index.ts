import { userReducer } from "./user/reducer";
import { createStore } from "redux";

export const store = createStore(userReducer);
