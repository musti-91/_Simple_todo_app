import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/PLaceList/PlaceList';
class FindPlace extends Component {
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
				});
			}
		}
	};
	onItemSelected = (key) => {
		const place = this.props.places.find((place) => place.key === key);
		this.props.navigator.push({
			screen: 'udemy_course.PlaceDetailScreen',
			title: place.placeName,
			passProps: { place }
		});
	};
	render() {
		return (
			<View>
				<PlaceList places={this.props.places} onItemSelected={this.onItemSelected} />
			</View>
		);
	}
}

export default connect((state) => ({
	places: state.places.places
}))(FindPlace);
