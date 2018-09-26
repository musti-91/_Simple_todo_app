import { Navigation } from 'react-native-navigation'

import Auth from './src/screens/Auth/Auth'
import SharePlace from './src/screens/SharePlace/SharePLace'
import FindPlace from './src/screens/FindPlace/FindPlace'
import PlaceDetail from './src/screens/PlaceDetail/PlaceDetail'
import SideDrawer from './src/screens/SideDrawer/SideDrawer'

import { Provider } from 'react-redux'
import store from './src/store/storeSetting'

Navigation.registerComponent('udemy_course.AuthScreen', () => Auth, store, Provider)
Navigation.registerComponent('udemy_course.SharePlaceScreen', () => SharePlace, store, Provider)
Navigation.registerComponent('udemy_course.FindPlaceScreen', () => FindPlace, store, Provider)
Navigation.registerComponent('udemy_course.PlaceDetailScreen', () => PlaceDetail, store, Provider)
Navigation.registerComponent('udemy_course.SideDrawerScreen', () => SideDrawer, store, Provider)

Navigation.startSingleScreenApp({
	screen: {
		screen: 'udemy_course.AuthScreen',
		title: 'Login Page',
		style: {
			drawerShadow: true, // optional, add this if you want a side menu drawer shadow
			contentOverlayColor: 'rgba(255,255,255,0.25)', // optional, add this if you want a overlay color when drawer is open
		},
		animationType: "parallax"
	}
})