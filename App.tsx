import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LoginScreen } from './Screens/LoginScreen'
import { ContactListScreen } from './Screens/ContactListScreen'
import { AddContactScreen } from './Screens/AddContactScreen'
import { SettingsScreen } from './Screens/SettingsScreen'
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation'

const MainStack = createStackNavigator({
  ContactList: ContactListScreen,
  AddContact: AddContactScreen,
})

const MainTabs = createBottomTabNavigator({
  Contacts: MainStack,
  Settings: SettingsScreen,
})

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Main: MainTabs,
})

export default class App extends React.Component {
  render() {
    return <LoginScreen />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
