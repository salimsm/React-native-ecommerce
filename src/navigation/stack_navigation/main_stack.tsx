import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AppRoute } from '../../consts/routes';
import MainPage from '../../pages/main_page';
import DetailPage from '../../pages/detail_page';
import CartPage from '../../pages/cart_page';
import SearchPage from '../../pages/search_page';


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
      <Stack.Screen
        name={AppRoute.CartPage}
        component={CartPage}
        
      />
      <Stack.Screen
        name={AppRoute.SearchPage}
        component={SearchPage}
        options={{
          headerShown: false,
        }}
      />
      
    </Stack.Navigator>
  );
};


export default MainStack;