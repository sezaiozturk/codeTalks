import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from './src/pages/SignUp'
import Login from './src/pages/Login'
import Rooms from './src/pages/Rooms'
import Chat from './src/pages/Chat'
import Colors from './src/styles/Colors/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FlashMessage from "react-native-flash-message";
import auth from '@react-native-firebase/auth'

const App = () => {
  const Stack = createStackNavigator();
  const [userSession, setUserSession] = useState();
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setUserSession(!!user);
    })
  }, [])
  const AuthStack = () => {
    return (
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
    )
  }
  const TalksStack = () => {
    return (
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
              onPress={() => auth().signOut()}
            />
          }}
        />
      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !userSession ? (
            <Stack.Screen
              name='Auth Stack'
              component={AuthStack}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name='TalksStack'
              component={TalksStack}
              options={{ headerShown: false }}
            />
          )
        }
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}

export default App