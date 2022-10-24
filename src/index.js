// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css'
// import App from "./App";
// import { createStore } from 'redux';
// import reducers from './reducers';
// const store = createStore(reducers);

// const listener = () => {
//     ReactDOM.render(
//         <App store={store} />,
//         document.getElementById('root')
//     );
// };

// store.subscribe(listener);
// listener();

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';
// import { createStore} from 'redux';
// import { Provider } from 'react-redux'
// import reducers from './reducers';

// const store = createStore(reducers);
// const listener = () => {
//     ReactDOM.render(
//         <Provider store={store}>
//             <App indexProp="react" />
//         </Provider>,
//         document.getElementById('root')
//     );
// };

// store.subscribe(listener);
// listener();

// import React from "react";
// import  ReactDOM  from "react-dom";
// import './index.css';
// import App from './components/App';
// import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import reducers from './reducers';

// const CallMiddleware = () => store => nextMiddle => action => {
//     console.log('1. reducer 실행 전');
//     console.log('2. action.type : '+action.type+', store str : '+store.getState().data.str);
//     let result = nextMiddle(action);
//     console.log('3. reducer 실행 후');
//     console.log('4. action.type : ' + action.type+', store str : ' + store.getState().data.str);
//     return result;
// }


// const store = createStore(reducers,  applyMiddleware(CallMiddleware));
// const listener = () => {
//     ReactDOM.render(
//         <Provider store={store}>
//             <App indexProp="react"/>
//         </Provider>,
//         document.getElementById('root')
//     );
// };

// store.subscribe(listener);
// listener();


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();