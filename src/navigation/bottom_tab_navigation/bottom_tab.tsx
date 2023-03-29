import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStack from '../stack_navigation/main_stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfilePage from '../../pages/profile_page';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainStack"
        component={MainStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProilePage"
        component={ProfilePage}
        options={{
          headerShown: false,
          tabBarLabel: 'person',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;