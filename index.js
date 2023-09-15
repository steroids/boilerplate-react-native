/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import Config from 'react-native-config';
import App from './App';
import {name as appName} from './app.json';

console.log(Platform.OS, Config);
process.env = Config;

AppRegistry.registerComponent(appName, () => App);
