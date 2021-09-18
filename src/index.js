import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider} from 'react-redux'
import {createStore} from 'redux'
import shareReducers from './reducers/combinReducer'
import combineMiddleware from './middleware/combineMIddleware'

const store= createStore(shareReducers,combineMiddleware)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

