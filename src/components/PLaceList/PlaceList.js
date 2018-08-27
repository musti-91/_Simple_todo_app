import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';
const PlaceList = (props) => {
	return (
		<FlatList
			data={props.places}
			keyExtractor={(item) => item.key.toString()}
			renderItem={({ item }) => <ListItem item={item} onItemPressed={() => props.onItemSelected(item.key)} />}
		/>
	);
};

export default PlaceList;
