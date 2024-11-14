import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DefaultTheme} from '@react-navigation/native';
import {useApplication} from '@steroidsjs/core/hooks';
import {getDefaultComponentsStyles} from '@steroidsjs/native/style';
import HtmlComponent from '@steroidsjs/native/components/HtmlComponent';
import LocaleComponent from '@steroidsjs/core/components/LocaleComponent';
import ClientStorageComponent from '@steroidsjs/native/components/ClientStorageComponent';
import NativeRouter from '@steroidsjs/native/ui/nav/NativeRouter';
import HttpComponent from '@steroidsjs/core/components/HttpComponent';

import styles from './src/styles';

export default function App() {
    const {renderApplication} = useApplication({
        reducers: require('./src/reducers').default,
        components: {
            clientStorage: ClientStorageComponent,
            locale: {
                className: LocaleComponent,
                language: 'ru',
            },
            html: {
                className: HtmlComponent,
                ...styles,
            },
            http: {
                className: HttpComponent,
                apiUrl: process.env.APP_BACKEND_URL,
            },
        },
        onInit: ({ui, html}) => {
            ui.addViews({
                'form.InputFieldView': require('@steroidsjs/native/ui/form/InputField').default,
                'content.IconView': require('@steroidsjs/native/ui/icon/IconView').default,
                'form.FieldLayoutView': require('@steroidsjs/native/ui/form/FieldLayout').default,
                'form.FormView': require('@steroidsjs/native/ui/form/FormView').default,
                'form.CheckboxListFieldView': require('@steroidsjs/native/ui/form/CheckboxListField').default,
                'form.CheckboxFieldView': require('@steroidsjs/native/ui/form/Switch').default,
                'form.DateTimeFieldView': require('@steroidsjs/native/ui/form/DateTimeField/views/DateTimeFieldView').default,
                'form.DateTimeModalView': require('@steroidsjs/native/ui/form/DateTimeField/views/DateTimeModalView').default,
            });
            html.addStyles([...getDefaultComponentsStyles()]);
            ui.addIcons({
                ...require('./assets/icons').default,
            });
        },
    });

    return renderApplication(
        <SafeAreaProvider>
            <NativeRouter
                routes={require('./src/routes').default}
                theme={DefaultTheme}
            />
        </SafeAreaProvider>,
    );
}
