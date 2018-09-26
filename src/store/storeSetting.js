// exporting store
import { createStore, combineReducers } from 'redux'
import places from './reducers/places'

const store = createStore(combineReducers({ places }))

export default store
