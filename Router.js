import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Button from './src/components/Button'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from './src/pages/SignUp'
import Login from './src/pages/Login'
import Rooms from './src/pages/Rooms'
import Chat from './src/pages/Chat'
import Colors from './src/styles/Colors/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='RoomsPage'
          component={Rooms}
          options={{
            headerTintColor: Colors.orange_dark,
            title: 'Rooms'
          }}
        />
        <Stack.Screen
          name='ChatPage'
          component={Chat}
          options={{
            headerTintColor: Colors.orange_dark,
            headerRight: () => <Icon
              name={"exit-to-app"}
              size={30}
              color={Colors.orange_dark}
            />
          }}
        />
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