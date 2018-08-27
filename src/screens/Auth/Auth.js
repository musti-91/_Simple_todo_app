import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import { connect } from 'react-redux';

class Auth extends Component {
	onLoginHandler = () => {
		startMainTabs();
	};
	render() {
		return (
			<View>
				<Text>Auth screen</Text>
				<Button title="Login" onPress={this.onLoginHandler} />
			</View>
		);
	}
}

export default connect()(Auth);
