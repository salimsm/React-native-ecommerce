import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import InitialPage from './src/pages/initial_page';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
    <Provider store={store}>
      <InitialPage />
    </Provider>
    <Toast />
    </>
  );
};

export default App;
