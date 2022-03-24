import { combineReducers, createStore } from "redux";
import asideReducer from "./aside-reducer";
import messagesReducer from "./messsages-reducer";
import profileReducer from "./profile-reducer";

const redusers = combineReducers({
   profile: profileReducer,
   messages: messagesReducer,
   aside: asideReducer
})

const store = createStore(redusers)

export default store;