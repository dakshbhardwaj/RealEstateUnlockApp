import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeListScreen from './screens/HomeListScreen';
import HomeDetailScreen from './screens/HomeDetailScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeList" component={HomeListScreen} />
        <Stack.Screen name="HomeDetail" component={HomeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
