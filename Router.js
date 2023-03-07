import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Button from './src/components/Button'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from './src/pages/SignUp'
import Login from './src/pages/Login'

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='LoginPage'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SignUpPage'
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App