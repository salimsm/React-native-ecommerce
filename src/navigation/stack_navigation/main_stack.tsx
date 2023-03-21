import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AppRoute } from '../../consts/routes';
import MainPage from '../../pages/main_page';
import DetailPage from '../../pages/detail_page';


const Stack = createNativeStackNavigator();



 const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoute.MainPage}
        component={MainPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={AppRoute.DetailPage}
        component={DetailPage}
        options={({route}: any) => ({title: route?.params?.name})}
      />
    </Stack.Navigator>
  );
};


export default MainStack;