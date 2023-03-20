import React from 'react';
import {SafeAreaView, StyleSheet, Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from './src/pages/login_page';
import {AppRoute} from './src/consts/routes';
import RegisterPage from './src/pages/register_page';
import MainPage from './src/pages/main_page';
import DetailPage from './src/pages/detail_page';

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
        <Stack.Screen name={AppRoute.MainPage} component={MainPage} 
                options={{
                  headerShown:false
                }}
        
        />
        <Stack.Screen name={AppRoute.DetailPage} component={DetailPage}
          options={({route}:any)=>({title: route?.params?.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
