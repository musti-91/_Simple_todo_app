import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';
const initialState = {
	places: [],
	selectedPlace: null
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PLACE:
			return {
				...state,
				places: [
					...state.places,
					{
						key: Math.floor(Math.random() * 23),
						placeName: action.placeName,
						image: { uri: 'https://picsum.photos/200/200/' }
					}
				]
			};
		case DELETE_PLACE:
			return {
				...state,
				places: state.places.filter((place) => place.key !== action.placeKey),
				selectedPlace: null
			};
		default:
			return state;
	}
};

export default reducer;
