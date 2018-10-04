import { ADD_PLACE, DELETE_PLACE, TRY_AUTH } from './actionTypes'

export const addPlace = (placeName) => ({
	type: ADD_PLACE,
	placeName: placeName
})

export const deletePlace = (key) => ({
	type: DELETE_PLACE,
	placeKey: key
})

export const tryAuth= (authData) => ({
	type:TRY_AUTH,
	authData
})