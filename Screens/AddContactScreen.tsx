import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
} from 'react-native'

interface IProps {
  navigation: {
    navigate: (route: string) => void
  }
  screenProps: {
    addContact: (c: {}) => void
  }
}

interface IState {
  name: string
  phone: string
  isFormValid: boolean
}
export default class AddContactScreen extends React.Component<IProps, IState> {
  state = {
    name: '',
    phone: '',
    isFormValid: false,
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'AddContact',
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.name !== prevState.name ||
      this.state.phone !== prevState.phone
    ) {
      // text has changed! -> validate form
      this.validateForm()
    }
  }

  validateForm = () => {
    const names = this.state.name.split(' ')
    // 1. phone has to be number
    // 2. phone has to be length of 10
    // 3. names length >= 2 (['First', 'Last', ...])
    // 4. names[0] && names[1]
    // convert to number (+)
    if (
      +this.state.phone >= 0 &&
      this.state.phone.length === 10 &&
      names.length >= 2 &&
      names[0] &&
      names[1]
    ) {
      this.setState({ isFormValid: true })
    } else {
      this.setState({ isFormValid: false })
    }
  }

  handleNameChange = name => {
    this.setState({ name })
  }

  handlePhoneChange = phone => {
    this.setState({ phone })
  }
  handleSubmit = () => {
    //
    this.props.screenProps.addContact(this.state)
    this.props.navigation.navigate('ContactList')
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhoneChange}
          placeholder="Phone"
          keyboardType="numeric"
        />
        <Button
          title="Submit"
          disabled={!this.state.isFormValid}
          onPress={this.handleSubmit}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})
