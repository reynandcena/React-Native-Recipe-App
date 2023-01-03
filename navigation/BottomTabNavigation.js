import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#FE7500',
            tabBarInactiveTintColor: '#74858C'
        }}
    >

        <Tab.Screen options={{
            tabBarIcon:({color, size}) => (
                <Ionicons name='ios-home-outline' size={size} color={color}/>
            )
            }}
            name="HomeTab" 
            component={HomeScreen}
        />

        <Tab.Screen options={{
            tabBarIcon:({color, size}) => (
                <Feather name='user' size={size} color={color}/>
            )
            }}
            name="Profile" 
            component={ProfileScreen}
        />

        <Tab.Screen options={{
            tabBarIcon:({color, size}) => (
                <Ionicons name='bookmark-outline' size={size} color={color}/>
            )
            }}
            name="Bookmark" 
            component={BookmarkScreen}
        />

        <Tab.Screen options={{
            tabBarIcon:({color, size}) => (
                <Ionicons name='search-outline' size={size} color={color}/>
            )
            }}
            name="Search" 
            component={SearchScreen}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation