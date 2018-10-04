import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

class PlaceInput extends Component {
	constructor(props) {
		super(props)
		this.inputRef = React.createRef()
	}
	state = {
		text: ''
	};

	componentDidMount () {
		this.inputRef.current.focus()
	}

	_onPlaceAdded = () => {
		if (this.state.text.trim() === '') {
			return;
		}
		this.props.onPlaceAdded(this.state.text);
		this.setState({ text: '' });
		this.props.back();
	};
	render () {
		const { text } = this.state;
		return (
			<View style={styles.fieldContainer}>
				<TextInput
					style={styles.input}
					value={text}
					onChangeText={(text) => this.setState({ text })}
					onSubmitEditing={this._onPlaceAdded}
					placeholder="Awesome place"
					ref={this.inputRef}
				/>
				<TouchableOpacity onPress={this._onPlaceAdded} style={{ height: 30 }}>
					<Text style={{ color: 'orange', fontSize: 20 }}>Add</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	fieldContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginTop: 6,
		backgroundColor: '#000',
		padding: 10
	},
	input: {
		borderWidth: 1,
		borderColor: 'orange',
		borderRadius: 3.5,
		width: '70%',
		paddingLeft: 10,
		color: 'orange'
	}
});

export default PlaceInput;
