import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import config from './src/config';

process.env.PLATFORM = config.platform;
process.env.DISABLE_PERSISTENT_ROUTER = config.disablePersistentRouter;

AppRegistry.registerComponent(appName, () => App);
