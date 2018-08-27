import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = (props) => {
	return (
		<TouchableOpacity style={styles.itemContainer} onPress={props.onItemPressed}>
			<Image source={props.item.image} style={styles.image} />
			<Text style={styles.text}>{props.item.placeName}</Text>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	itemContainer: {
		width: '100%',
		height: 60,
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#ccc',
		flexDirection: 'row',
		padding: 10,
		marginBottom: 10
	},
	image: {
		width: '20%',
		height: 50,
		borderRadius: 10
	},
	text: {
		width: '50%',
		textAlign: 'center'
	},
	icon: {
		width: '20%',
		height: 50
	}
});
export default ListItem;
