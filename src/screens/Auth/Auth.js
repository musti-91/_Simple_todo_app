import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import startMainTabs from '../MainTabs/startMainTabs'

class Auth extends Component {
	onLoginHandler = () => {
		startMainTabs()
	};
	render () {
		return (
			<View>
				<Text>Auth screen</Text>
				<Button title="Login" onPress={this.onLoginHandler} />
			</View>
		)
	}
}


export default Auth
