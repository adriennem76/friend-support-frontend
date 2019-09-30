import React from 'react';
import {render} from 'react-dom';
import './index.css';
import store from "./store/store"
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);


serviceWorker.unregister();
