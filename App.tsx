import React from 'react';

import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import InitialPage from './src/pages/initial_page';

const App = () => {
  return (
    <Provider store={store}>
      <InitialPage />
    </Provider>
  );
};

export default App;
