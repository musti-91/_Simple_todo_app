import React, { Component } from 'react'
import {
	View, Text, Button,
	Dimensions,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Keyboard,
	TouchableWithoutFeedback
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { tryAuth } from '../../store/actions/index'

import startMainTabs from '../MainTabs/startMainTabs'

class Auth extends Component {
	state = {
		emailValue: '',
		passwordValue: '',
		rePassValue: '',
	}

	onLoginHandler = (login) => {
		startMainTabs()
	}

	render () {
		const { emailValue, passwordValue, rePassValue } = this.state
		const { input } = styles
		console.log(emailValue, passwordValue, rePassValue)
		return (
			<View>
				<Text>Login with</Text>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View>
						<TextInput
							value={emailValue}
							onChange={this.onTextChange}
							name='email'
							style={input}
							keyboardType="default"
							autoCorrect={false}
							autoCapitalize="none"
						/>
						<TextInput
							value={passwordValue}
							onChange={this.onTextChange}
							name='pass' style={input}
							secureTextEntry />
						<TextInput
							value={rePassValue}
							onChange={this.onTextChange}
							name="rePass" style={input}
							secureTextEntry />
					</View>
				</TouchableWithoutFeedback>
				<TouchableOpacity onPress={this.onLoginHandler}>
					<Text>Sign up</Text>
				</TouchableOpacity>
			</View>
		)
	}

	onChange = e => {
		const { name, value } = e.target
		this.setState(() => ({
			[name]: value
		}))
	}
}

const styles = StyleSheet.create({
	input: {
		width: '80%',
		borderColor: 'orange',
		borderWidth: 1
	}
})

const mapDispatchToProps = dispatchEvent => ({
	tryAuth: authData => dispatchEvent(tryAuth(authdata))
})
export default connect(null, mapDispatchToProps)(Auth)
