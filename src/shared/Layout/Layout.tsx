import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';

// import useComponents from '@steroidsjs/core/hooks/useComponents';
// import useLayout from '@steroidsjs/core/hooks/useLayout';

// import auth from '../../api/auth';

const Layout: React.FunctionComponent<any> = (props) => {
    // const components = useComponents();
    // const layout = useLayout(() => auth.init(components.api)
    //     .then((data) => {
    //         return data;
    //     }));

    React.useEffect(() => {
        setTimeout(SplashScreen.hide, 1000);
    }, []);

    return props.children;
};

export default Layout;
