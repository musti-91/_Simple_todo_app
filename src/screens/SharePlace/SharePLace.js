import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PlaceInput from '../../components/PlaceInput/PlaceInput'
import { addPlace } from '../../store/actions/index'

class SharePlace extends Component {
	constructor(props) {
		super(props);
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

	render () {
		return (
			<View>
				<PlaceInput
					onPlaceAdded={(placeName) => this.props.onPlaceAdded(placeName)}
					back={() => this.props.navigator.push({ screen: 'udemy_course.FindPlaceScreen' })}
				/>
			</View>
		)
	}
}
PlaceInput.propTypes = {
	onPlaceAdded: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
	onPlaceAdded: (place) => dispatch(addPlace(place))
})
export default connect(null, mapDispatchToProps)(SharePlace)
