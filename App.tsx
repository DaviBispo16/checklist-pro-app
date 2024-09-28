import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from './source/screens/Details/index'
import Home from './source/screens/Home';
import TaskProvider from './source/context/TaskContext';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Details' component={Details}/>
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
    
  );
}

