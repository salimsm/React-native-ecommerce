import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainStack from './src/navigation/stack_navigation/main_stack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import AuthStack from './src/navigation/stack_navigation/auth_stack';
import BottomTab from './src/navigation/bottom_tab_navigation/bottom_tab';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'AuthStack'}
            component={AuthStack}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={'BottomTab'}
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
