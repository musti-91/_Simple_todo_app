import { Platform } from 'react-native'
import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const startMainTabs = () => {
	Promise.all([
		Icon.getImageSource(Platform.OS === "android" ? "md-map" : "ios-map", 30),
		Icon.getImageSource(Platform.OS === 'android' ? 'md-share-alt' : 'ios-share', 30),
		Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30)
	]).then((sources) =>
		Navigation.startTabBasedApp({
			tabs: [
				{
					title: 'Find Place',
					screen: 'udemy_course.FindPlaceScreen',
					label: 'Find place',
					icon: sources[0],
					navigatorButtons: {
						leftButtons: [
							{
								icon: sources[2],
								title: 'Menu',
								id: 'sideDrawerToggle'
							}
						]
					}
				},
				{
					title: 'Share Place',
					screen: 'udemy_course.SharePlaceScreen',
					label: 'Share place',
					icon: sources[1],
					navigatorButtons: {
						leftButtons: [
							{
								icon: sources[2],
								title: 'Menu',
								id: 'sideDrawerToggle'
							}
						]
					}
				}
			],
			tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
				tabBarButtonColor: '#fff', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
				tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
				tabBarBackgroundColor: 'rgba(0,0,0,.3)', // optional, change the background color of the tab bar
				initialTabIndex: 1, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
			},
			drawer: {
				left: {
					screen: 'udemy_course.SideDrawerScreen'
				}
			}
		})
	);
}
export default startMainTabs
