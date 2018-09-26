import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'


class SideDrawer extends Component {
	render () {
		return (
			<View
				style={[
					styles.sideDrawer,
					{
						backgroundColor: '#fff',
						width: Dimensions.get('window').width * 0.8
					}
				]}
			>
				<TouchableOpacity>
					<Text>
						<Icon name={Platform.OS === "android" ? "md-log-out" : "ios-log-out"}
							size={30}
							color="#aaa" />
						Sign out</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

//styles for android devices
const styles = StyleSheet.create({
	sideDrawer: {
		marginTop: 22,
		backgroundColor: '#eee',
		flex: 1
	}
})

export default SideDrawer
