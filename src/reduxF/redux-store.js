import { applyMiddleware, combineReducers, createStore } from "redux";
import asideReducer from "./aside-reducer";
import authReducer from "./auth-reducer";
import messagesReducer from "./messsages-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

const redusers = combineReducers({
   profile: profileReducer,
   messages: messagesReducer,
   aside: asideReducer,
   users: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
})

const store = createStore(redusers, applyMiddleware(thunkMiddleware))

export default store;