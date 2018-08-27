import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import deletePlace from '../../store/actions/index';

import { connect } from 'react-redux';
class PlaceDetail extends Component {
	onDeletePressed = () => {
		const { key } = this.props.place;
		this.props.onItemDeleted(key);
	};
	render() {
		const { place } = this.props;
		return (
			<View style={styles.content}>
				<Image source={place.image} style={styles.img} resizeMode="contain" />
				<Text style={styles.placeName}>{place.placeName}</Text>
				<TouchableOpacity onPress={this.onDeletePressed}>
					<Icon name="ios-trash" size={50} color="#eee" style={{ marginTop: 30 }} />
				</TouchableOpacity>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	content: {
		width: '100%',
		height: 500,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	img: {
		width: '100%',
		borderRadius: 10,
		height: 300
	},
	placeName: {
		marginTop: 10,
		marginBottom: 10,
		fontSize: 30
	}
});
const mapDispatchToProps = (dispatch) => ({
	onItemDeleted: (key) => dispatch(deletePlace(key))
});
export default connect(null, mapDispatchToProps)(PlaceDetail);
