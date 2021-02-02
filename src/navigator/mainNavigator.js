import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList199715Navigator from '../features/ArticleList199715/navigator';
import ArticleList199714Navigator from '../features/ArticleList199714/navigator';
import ArticleList199713Navigator from '../features/ArticleList199713/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList199715: { screen: ArticleList199715Navigator },
ArticleList199714: { screen: ArticleList199714Navigator },
ArticleList199713: { screen: ArticleList199713Navigator },

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
