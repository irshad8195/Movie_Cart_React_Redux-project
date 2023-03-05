import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {configureStore, createStore} from 'redux'
import rootReducer from './reducers';
//configureStore
const store = createStore(rootReducer)
console.log('store', store)
// console.log('BEFORE STATE STATE', store.getState())

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'superman'}]
// })
// console.log('AFTER STATE STATE', store.getState())

//ReactDOM.render(<App />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  store={store}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
