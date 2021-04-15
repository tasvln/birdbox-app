import React from 'react'

// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Icon
import { Feather } from '@expo/vector-icons'

// Auth Screens
import SignIn from '../screens/auth/SignIn'
import SignUp from '../screens/auth/SignUp'

// Main Screens
import Home from '../screens/main/Home'
import Create from '../screens/main/Create'
import Space from '../screens/main/Space'
import Settings from '../screens/main/Settings'
import Spaces from '../screens/main/Spaces'
import Info from '../screens/main/Info'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackScreen() {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Create') {
                iconName = focused ? 'plus-circle' : 'plus-circle';
              } else if (route.name === 'Spaces') {
                iconName = focused ? 'message-circle' : 'message-circle';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings';
              }
  
              // You can return any component that you like here!
              return <Feather name={iconName} size={32} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#eb7a4f',
            inactiveTintColor: '#a6a7b2',
            showLabel: false,
            style: {
              backgroundColor: "#272B34",
              borderTopColor: "#272B34",
              height: 80
            }
          }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Create" component={Create} />
            <Tab.Screen name="Spaces" component={Spaces} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" mode="modal" screenOptions={{ gestureEnabled: true }} >
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Space" component={Space} />
                <Stack.Screen name="Info" component={Info} />
                <Stack.Screen name="MainStack"  component={HomeStackScreen} options={{ gestureEnabled: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

