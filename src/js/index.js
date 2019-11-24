import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { DataStoreProvider } from './components/dataStore-context/dataStoreContext.jsx';
import DataService from './services/data-service';
import ErrorBounndry from './components/error-boundry/errorBoundry.jsx';
import App from './components/app/app.jsx';

import store from './store';

const dataService = new DataService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBounndry>
      <DataStoreProvider value={dataService}>
        <Router>
          <App />
        </Router>
      </DataStoreProvider>
    </ErrorBounndry>
  </Provider>,
  document.getElementById('root')
);
