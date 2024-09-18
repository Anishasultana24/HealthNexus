import { View, Text,ScrollView } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Landing from './component/Landing'

import Login from './component/Login';
import Appointment from './component/Appointment';
import Dashboard from './component/Dashboard'
import Prescription from './component/Prescription'
import MedicalTest from './component/MedicalTest'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      
            <Stack.Navigator initialRouteName="Landing">
              
              <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
              
              <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
              <Stack.Screen name="Appointment" component={Appointment} options={{ title: 'Appointment' }} />
              <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard' }} />
              <Stack.Screen name="Prescription" component={Prescription} options={{ title: 'Prescription' }} />
              <Stack.Screen name="MedicalTest" component={MedicalTest} options={{ title: 'MedicalTest' }} />
            </Stack.Navigator>
          
          
    </NavigationContainer>
);
}

export default App