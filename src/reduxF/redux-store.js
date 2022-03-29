import { combineReducers, createStore } from "redux";
import asideReducer from "./aside-reducer";
import messagesReducer from "./messsages-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

const redusers = combineReducers({
   profile: profileReducer,
   messages: messagesReducer,
   aside: asideReducer,
   users: usersReducer
})

const store = createStore(redusers)

export default store;