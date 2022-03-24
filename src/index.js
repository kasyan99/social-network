import './reset.css'
import './index.css';
import reportWebVitals from './reportWebVitals';
// import state, { subscribe } from './reduxF/state';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { addPost, updatePostText } from './reduxF/state';

import store from './reduxF/store';
import StoreContext from './StoreContext';

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

render(store.getState())

store.subscribe(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

