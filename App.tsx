import * as React from 'react';

import useApplication from '@steroidsjs/core/hooks/useApplication';
import NativeRouter from '@steroidsjs/native/ui/nav/NativeRouter';
import { getDefaultComponentsStyles } from '@steroidsjs/native/style';

import HtmlComponent from '@steroidsjs/native/components/HtmlComponent';
import HttpComponent from '@steroidsjs/core/components/HttpComponent';
import ClientStorageComponent from '@steroidsjs/native/components/ClientStorageComponent';
import ApiComponent from '@steroidsjs/core/components/ApiComponent';

import Layout from './src/shared/Layout';
import styles from './src/styles';

export default function App() {
    const {renderApplication} = useApplication({
        reducers: require('@steroidsjs/core/reducers').default,
        components: {
            html: {
                className: HtmlComponent,
                ...styles,
            },
            http: {
                className: HttpComponent,
                apiUrl: process.env.APP_BACKEND_URL,
            },
            clientStorage: ClientStorageComponent,
            api: ApiComponent,
        },
        onInit: ({html}) => {
            html.addStyles([...getDefaultComponentsStyles()]);
        },
    });

    return renderApplication(
        <Layout>
            <NativeRouter routes={require('./src/routes/index').default} />
        </Layout>,
    );
}
