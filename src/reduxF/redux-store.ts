import { applyMiddleware, combineReducers, createStore, compose } from "redux";
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

type RootReducerType = typeof redusers
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

// const store = createStore(redusers, applyMiddleware(thunkMiddleware))
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));



export default store;