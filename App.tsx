import React from 'react';
import {SafeAreaView, StyleSheet, Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from './src/pages/login_page';
import { AppString } from './src/consts/strings';
import RegisterPage from './src/pages/register_page';
import MainPage from './src/pages/main_page';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={AppString.pages.LoginPage} component={LoginPage} />
        <Stack.Screen name={AppString.pages.RegisterPage} component={RegisterPage} />
        <Stack.Screen name={AppString.pages.MainPage} component={MainPage} />

      </Stack.Navigator>

      {/* <SafeAreaView style={{flex:1}}>
      <LoginPage />
    </SafeAreaView> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
