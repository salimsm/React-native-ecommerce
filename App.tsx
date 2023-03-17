import React from 'react';
import {SafeAreaView, StyleSheet, Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from './src/pages/login_page';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>

      {/* <SafeAreaView style={{flex:1}}>
      <LoginPage />
    </SafeAreaView> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
