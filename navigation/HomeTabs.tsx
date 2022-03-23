import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Constants
import {COLORS, icons} from '../constants';
import {Home} from '../screens';
import { HomeBottomTabParamList } from '../types';
// Screens

const Tab = createBottomTabNavigator<HomeBottomTabParamList>();

interface ITabBarIcon {
  focused: boolean;
  icon: ImageSourcePropType;
}

function TabBarIcon({focused, icon}: ITabBarIcon) {
  const tintColor = focused ? COLORS.white : COLORS.gray;

  return (
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        height: 25,
        width: 25,
        tintColor,
      }}
    />
  );
}

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 70,
          shadowColor: '#000',
          backgroundColor: COLORS.black,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.53,
          shadowRadius: 13.97,

          elevation: 21,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: props => (
            <TabBarIcon {...props} icon={icons.dashboard_icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: props => (
            <TabBarIcon {...props} icon={icons.search_icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Home}
        options={{
          tabBarIcon: props => (
            <TabBarIcon {...props} icon={icons.notification_icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Home}
        options={{
          tabBarIcon: props => <TabBarIcon {...props} icon={icons.menu_icon} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({});
