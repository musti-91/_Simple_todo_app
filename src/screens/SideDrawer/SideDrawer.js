import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'

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
				<Text>Side Drawer</Text>
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
