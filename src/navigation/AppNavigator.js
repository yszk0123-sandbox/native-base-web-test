import { createNavigator, SwitchRouter } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';
import { HomeScreen } from '../screens/HomeScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { FooterTabs } from '../components/FooterTabs';

const AppNavigator = createNavigator(
  FooterTabs,
  SwitchRouter({
    HomeScreen,
    AboutScreen,
  }),
  {},
);

export const App = createBrowserApp(AppNavigator);
