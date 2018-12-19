import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class ContactListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Contacts',
      headerRight: (
        <Button title="Add" onPress={() => navigation.push('AddContact')} />
      ),
    }
  }
  render() {
    return (
      <SafeAreaView>
        <Text>This is ContactListScreen</Text>
      </SafeAreaView>
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
