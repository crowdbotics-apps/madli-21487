import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile142405Navigator from '../features/UserProfile142405/navigator';
import Settings142404Navigator from '../features/Settings142404/navigator';
import Settings142402Navigator from '../features/Settings142402/navigator';
import SignIn2142400Navigator from '../features/SignIn2142400/navigator';
import Settings142394Navigator from '../features/Settings142394/navigator';
import UserProfile142387Navigator from '../features/UserProfile142387/navigator';
import Settings142386Navigator from '../features/Settings142386/navigator';
import Settings142384Navigator from '../features/Settings142384/navigator';
import SignIn2142382Navigator from '../features/SignIn2142382/navigator';
import Settings142380Navigator from '../features/Settings142380/navigator';
import UserProfile142373Navigator from '../features/UserProfile142373/navigator';
import Settings142372Navigator from '../features/Settings142372/navigator';
import Settings142370Navigator from '../features/Settings142370/navigator';
import SignIn2142368Navigator from '../features/SignIn2142368/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile142405: { screen: UserProfile142405Navigator },
Settings142404: { screen: Settings142404Navigator },
Settings142402: { screen: Settings142402Navigator },
SignIn2142400: { screen: SignIn2142400Navigator },
Settings142394: { screen: Settings142394Navigator },
UserProfile142387: { screen: UserProfile142387Navigator },
Settings142386: { screen: Settings142386Navigator },
Settings142384: { screen: Settings142384Navigator },
SignIn2142382: { screen: SignIn2142382Navigator },
Settings142380: { screen: Settings142380Navigator },
UserProfile142373: { screen: UserProfile142373Navigator },
Settings142372: { screen: Settings142372Navigator },
Settings142370: { screen: Settings142370Navigator },
SignIn2142368: { screen: SignIn2142368Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
