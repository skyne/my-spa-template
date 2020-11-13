import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap';

import appReducers from './reducers';
import { setStore as loaderSetStore } from './components/loader/Loader.react';
import { setStore as toasterSetStore } from './components/toaster/Toaster.react';
import App from './App';

import 'bootstrap/less/bootstrap.less';

const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
loaderSetStore(store);
toasterSetStore(store);

store.dispatch({
  type: 'APP_INITIALIZING'
});

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

setTimeout(() => {
  store.dispatch({
    type: 'APP_INITIALIZED'
  });
}, 10000);
