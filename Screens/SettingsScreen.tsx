import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon
        name={`md-information-circle${focused ? '' : '-outline'}`}
        size={25}
        color={tintColor}
      />
    ),
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Settings Screen</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
})
