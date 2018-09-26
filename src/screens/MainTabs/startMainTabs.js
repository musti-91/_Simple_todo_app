import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
const startMainTabs = () => {
	Promise.all([
		Icon.getImageSource('md-map', 30),
		Icon.getImageSource('ios-share-alt', 30),
		Icon.getImageSource('ios-menu', 30)
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
			drawer: {
				left: {
					screen: 'udemy_course.SideDrawerScreen'
				}
			}
		})
	);
}
export default startMainTabs
