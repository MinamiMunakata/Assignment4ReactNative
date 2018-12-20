import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  LoginScreen,
  AddContactScreen,
  ContactListScreen,
  SettingsScreen,
} from './Screens'
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation'
import { fetchUsers } from './api'
import Icon from 'react-native-vector-icons/Ionicons'

const MainStack = createAppContainer(
  createStackNavigator(
    {
      ContactList: ContactListScreen,
      AddContact: AddContactScreen,
    },
    {
      initialRouteName: 'ContactList',
    }
  )
)

MainStack.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name={'ios-contacts'} size={25} color={tintColor} />
  ),
}

const MainTabs = createAppContainer(
  createBottomTabNavigator({
    Contacts: MainStack,
    Settings: SettingsScreen,
  })
)

const AppNavigator = createAppContainer(
  createSwitchNavigator({
    // Login: LoginScreen,
    Main: MainTabs,
  })
)

export default class App extends React.Component {
  state = {
    contacts: null,
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = async () => {
    const results = await fetchUsers()
    this.setState({
      contacts: results,
    })
  }

  addContact = newContact => {
    this.setState((prev: { contacts: [] }) => ({
      contacts: [...prev.contacts, newContact],
    }))
  }
  render() {
    return (
      <AppNavigator
        screenProps={{
          contacts: this.state.contacts,
          addContact: this.addContact,
        }}
      />
    )
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
