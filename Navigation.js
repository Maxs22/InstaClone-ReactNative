import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ReelsScreen from './screens/ReelsScreen';
import SearchScreen from './screens/SearchScreen';
import ShopScreen from './screens/ShopScreen';
import ProfileHeader from './Components/ProfileHeader';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if(route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if(route.name === 'Search') {
                            iconName = focused ? 'search' : 'search-outline';
                        } else if(route.name === 'Reels') {
                            iconName = focused ? 'videocam' : 'videocam-outline';
                        } else if(route.name === 'Shop') {
                            iconName = focused ? 'cart' : 'cart-outline';
                        } else if(route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={'#000'} />;
                    },

                    tabBarShowLabel: false
                })}
                            >

                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Reels" component={ReelsScreen} />
                <Tab.Screen name="Shop" component={ShopScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} 
                    options={{
                        headerTitle: () => <ProfileHeader/>
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>

    )   
    }