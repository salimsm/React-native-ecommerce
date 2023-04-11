import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRoute} from '../../consts/routes';
import ProfilePage from '../../pages/profile_page';
import FavouritePage from '../../pages/favourite_page';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoute.ProfilePage}
        component={ProfilePage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={AppRoute.FavouritePage}
        component={FavouritePage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
