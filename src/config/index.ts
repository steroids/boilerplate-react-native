import Config from 'react-native-config';

interface IConfig {
    platform: string;
    disablePersistentRouter: string;
    appBackendUrl: string;
}

export default {
    platform: Config.PLATFORM,
    disablePersistentRouter: Config.DISABLE_PERSISTENT_ROUTER,
    appBackendUrl: Config.APP_BACKEND_URL,
} as IConfig;
