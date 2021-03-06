import { profileReducer } from "./profile/reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user/reducer";
import { projectsReducer } from "./projects/reducer";

const middlewares = [thunk];

const persistConfig = {
  key: "root",
  blacklist: ["profile"],
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  projects: projectsReducer,
  profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
