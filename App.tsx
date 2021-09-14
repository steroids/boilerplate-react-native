import useApplication from '@steroidsjs/core/hooks/useApplication';
import useNativeRouter from '@steroidsjs/native/hooks/useNativeRouter';
import HtmlComponent from '@steroidsjs/native/components/HtmlComponent';
import { getDefaultComponentsStyles } from '@steroidsjs/native/style';

import styles from './src/styles';

process.env.PLATFORM = 'mobile';

export default function App() {
    const {renderApplication} = useApplication({
        reducers: require('@steroidsjs/core/reducers').default,
        components: {
            html: {
                className: HtmlComponent,
                ...styles,
            },
        },
        onInit: ({html}) => {
            html.addStyles([...getDefaultComponentsStyles()]);
        },
    });
    const Navigations = useNativeRouter(require('./src/routes').default);
    return renderApplication(Navigations);
}
