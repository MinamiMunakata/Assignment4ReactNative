import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import SectionListContacts from '../Components/SectionListContacts'

interface IProps {
  screenProps: {
    contacts: []
  }
}

export default class ContactListScreen extends React.Component<IProps, {}> {
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
        {this.props.screenProps.contacts && (
          <SectionListContacts contacts={this.props.screenProps.contacts} />
        )}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
