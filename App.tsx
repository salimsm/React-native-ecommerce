import React from 'react';
import {SafeAreaView, StyleSheet, Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from './src/pages/login_page';
import {AppRoute} from './src/consts/routes';
import RegisterPage from './src/pages/register_page';
import MainStack from './src/navigation/stack_navigation/main_stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={AppRoute.LoginPage}
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={AppRoute.RegisterPage}
          component={RegisterPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'MainStack'}
          component={MainStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
