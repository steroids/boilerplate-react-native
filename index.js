/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Config from 'react-native-config';
import App from './App';
import {name as appName} from './app.json';

process.env = Config;

AppRegistry.registerComponent(appName, () => App);
