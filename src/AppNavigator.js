import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
// import { Dimensions, Platform } from 'react-native';

import Login from './pages/login';
// import Quizes from './pages/quizes';
// import Setting from './pages/setting';
// import Earncoins from './pages/earncoins';
// import Molecular from './pages/molecular';
// import Profile from './pages/profile';
// import Notifications from './pages/notifications';
// import Mychats from './pages/mychats';
// import Leaderboard from './pages/leaderboard';
// import Gameover from './pages/gameover';
// import Singlechat from './pages/singlechat';
// import Sidebar from './pages/sidebar';

// const DrawerNavigation = createDrawerNavigator(
//     {
//         Quizes: {
//             screen: Quizes, 
//             navigationOptions: {
//                 header: null
//             }
//         },
//         Setting: {
//             screen: Setting, 
//             navigationOptions: {
//                 header: null
//             }
//         },    
//         Earncoins: {
//             screen: Earncoins, 
//             navigationOptions: {
//                 header: null
//             }
//         },      
//         Molecular: {
//             screen: Molecular, 
//             navigationOptions: {
//                 header: null
//             }
//         }, 
//         Profile: {
//             screen: Profile, 
//             navigationOptions: {
//                 header: null
//             }
//         },  
//         Notifications: {
//             screen: Notifications, 
//             navigationOptions: {
//                 header: null
//             }
//         },    
//         Mychats: {
//             screen: Mychats, 
//             navigationOptions: {
//                 header: null
//             }
//         }, 
//         Leaderboard: {
//             screen: Leaderboard, 
//             navigationOptions: {
//                 header: null
//             }
//         },  
//         Gameover: {
//             screen: Gameover, 
//             navigationOptions: {
//                 header: null
//             }
//         },    
//         Singlechat: {
//             screen: Singlechat, 
//             navigationOptions: {
//                 header: null
//             }
//         },    
//     }, {
//         initialRouteName: 'Quizes',
//         drawerPosition: 'left',
//         headerMode: 'none',
//         drawerWidth: Dimensions.get('window').width - (Platform.OS === 'android' ? 80 : 120),
//         contentComponent: Sidebar,
//         contentOptions: { activeBackgroundColor: 'blue' }
//     }
// );

//flower falling effect and parallax packground moving by accelerometer
const Navigator = createStackNavigator(
    {
        Login: {
            screen: Login, 
            navigationOptions: {
                header: null
            },
        },                 
    },
    {
        initialRouteName: 'Login'
    }
);

const AppNavigator = createAppContainer(Navigator);
export default AppNavigator;
