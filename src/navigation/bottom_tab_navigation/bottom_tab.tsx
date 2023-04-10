import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainStack from '../stack_navigation/main_stack';
import ProfilePage from '../../pages/profile_page';
import HistoryPage from '../../pages/history_page';
import {AppColor} from '../../consts/colors';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  console.log('Bottom Tab');

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: AppColor.primary,
        },
        tabBarActiveTintColor: AppColor.white,
      })}>
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
        name="HistoryPage"
        component={HistoryPage}
        options={{
          headerShown: false,
          tabBarLabel: 'History',
          tabBarIcon: ({color, size}) => (
            <Icon name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProilePage"
        component={ProfilePage}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="user-o" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
