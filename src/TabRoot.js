import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Login from './pages/login';
import Quizes from './pages/quizes';
import Setting from './pages/setting';
import Earncoins from './pages/earncoins';
import Molecular from './pages/molecular';
import Gamecreate from './pages/gamecreate';
import Afterselect from './pages/afterselect';
import Gamewait from './pages/gamewait';
import Gameresult from './pages/gameresult';
import Profile from './pages/profile';
import Notifications from './pages/notifications';
import Mychats from './pages/mychats';
import Leaderboard from './pages/leaderboard';
import Gameover from './pages/gameover';
import Singlechat from './pages/singlechat';
import Sidebar from './pages/sidebar';

export default createStackNavigator(
  {
      Login: {
          screen: Login, 
          navigationOptions: {
              header: null
          },
      },   
      Quizes: {
        screen: Quizes, 
        navigationOptions: {
            header: null
        },
      },   
      Setting: {
        screen: Setting, 
        navigationOptions: {
            header: null
        },
      },       
      Earncoins: {
        screen: Earncoins, 
        navigationOptions: {
            header: null
        },
      },   
      Molecular: {
        screen: Molecular, 
        navigationOptions: {
            header: null
        },
      },   
      Afterselect: {
        screen: Afterselect, 
        navigationOptions: {
            header: null
        },
      },   
      Gamecreate: {
        screen: Gamecreate, 
        navigationOptions: {
            header: null
        },
      },   
      Gamewait: {
        screen: Gamewait, 
        navigationOptions: {
            header: null
        },
      },   
      Gameresult: {
        screen: Gameresult, 
        navigationOptions: {
            header: null
        },
      },   
      Profile: {
        screen: Profile, 
        navigationOptions: {
            header: null
        },
      },   
      Notifications: {
        screen: Notifications, 
        navigationOptions: {
            header: null
        },
      },    
      Sidebar: {
        screen: Sidebar, 
        navigationOptions: {
            header: null
        },
      },      
      Mychats: {
        screen: Mychats, 
        navigationOptions: {
            header: null
        },
      },     
      Leaderboard: {
        screen: Leaderboard, 
        navigationOptions: {
            header: null
        },
      },  
      Gameover: {
        screen: Gameover, 
        navigationOptions: {
            header: null
        },
      },      
      Singlechat: {
        screen: Singlechat, 
        navigationOptions: {
            header: null
        },
      },             
  },
  {
      initialRouteName: 'Login'
  }
);

// export default AppNavigator = createAppContainer(Navigator);
// export default AppNavigator;
