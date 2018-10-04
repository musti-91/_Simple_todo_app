import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Animated, Easing } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PlaceList from '../../components/PLaceList/PlaceList'
class FindPlace extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fetchPlaces: false,
			removeAnimation: new Animated.Value(0)
		}
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
	}

	onNavigatorEvent = (event) => {
		if (event.type === 'NavBarButtonPress') {
			if (event.id === 'sideDrawerToggle') {
				this.props.navigator.toggleDrawer({
					side: 'left',
					animated: true
				})
			}
		}
	}

	onItemSelected = (key) => {
		const place = this.props.places.find((place) => place.key === key)
		this.props.navigator.push({
			screen: 'udemy_course.PlaceDetailScreen',
			title: place.placeName,
			passProps: { place }
		})
	}

	render () {
		const { fetchPlaces, removeAnimation } = this.state
		const { loadButton, buttonText } = styles
		return (
			<View>
				{fetchPlaces && this._renderPlaces(removeAnimation)}
				<TouchableOpacity onPress={this._onLoadPlaces} style={loadButton}>
					<View>
						<Text style={buttonText}>Load Places</Text>
					</View>
				</TouchableOpacity>
			</View>
		)
	}

	_renderPlaces = (removeAnimation) => (
		<Animated.View style={{ opacity: removeAnimation}}>
			<PlaceList places={this.props.places} onItemSelected={this.onItemSelected} />
		</Animated.View>
	)
	_onLoadPlaces = () => {
		Animated.timing(this.state.removeAnimation, {
			duration: 1000,
			toValue: 1,
			useNativeDriver: true,
			easing:Easing.back()
		}).start()
		this.setState(() => ({
			fetchPlaces: true
		}))
	}
}

const styles = StyleSheet.create({
	loadButton: {
		width: "25%",
		padding: 10,
		backgroundColor: 'blue',
		borderRadius: 10,
		alignSelf: "center",
		marginTop: 50
	},
	buttonText: {
		color: 'white'
	}
})

FindPlace.propTypes = {
	places: PropTypes.array
}
FindPlace.defaultProps = {
	places: []
}

const mapStateToProps = state => ({
	places: state.places.places
})
export default connect(mapStateToProps, null)(FindPlace)
