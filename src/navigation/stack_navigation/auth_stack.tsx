import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRoute} from '../../consts/routes';
import LoginPage from '../../pages/login_page';
import RegisterPage from '../../pages/register_page';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
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
    </Stack.Navigator>
  );
};
export default AuthStack;
