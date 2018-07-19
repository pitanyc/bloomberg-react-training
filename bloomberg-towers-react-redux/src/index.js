import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { Provider, connect } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { createStore, applyMiddleware, compose } from "redux";
import { INCREASE, DECREASE, increase, decrease } from "./redux/actionTypes";
import timingMiddleWare from "./redux/timingMiddleWare";
// import dispatchAFunction from './redux/dispatchAFunction';

const columnHeightLimit = 12;

const initialState = [7];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return [Math.min(state[0] + 1, columnHeightLimit)];
    case DECREASE:
      return [Math.max(state[0] - 1, 0)];
    default:
      return state;
  }
};

const middlewares = [timingMiddleWare];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  myReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

const mapStateToProps = state => ({
  length: state[0]
});

const mapDispatchToProps = dispatch => ({
  increaseColumn: () => dispatch(increase()),
  decreaseColumn: () => dispatch(decrease())
});

const ReduxApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>,
  document.getElementById("root")
);

// SSR = server side rendering  => with string
const htmlStr = ReactDOMServer.renderToString(
  <Provider store={store}>
    <ReduxApp />
  </Provider>
);
console.log(`htmlStr: `, htmlStr);

ReactDOM.hydrate(htmlStr, document.getElementById("root2"));
// ReactDOM.render(htmlStr, document.getElementById("root2"));

// SSR = server side rendering  => with node stream: but this only works on the server side!
// const nodeStream = ReactDOMServer.renderToNodeStream(
//   <Provider store={store}>
//     <ReduxApp />
//   </Provider>
// );
// console.log(`nodeStream:`, nodeStream);

registerServiceWorker();
