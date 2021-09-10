import * as React from 'react';
import { View, ScrollView, Text } from 'react-native';

import useBemNative from '@steroidsjs/native/hooks/useBemNative';

import Button from '../../ui/form/Button';

import styles from './ButtonScreenStyles';

export default function ButtonScreen() {
    const bem = useBemNative('ButtonScreen', styles);

    const async = React.useCallback(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 1500);
        });
    }, []);

    return (
        <ScrollView style={bem('screen')}>
            <Text style={bem('h1', bem.element('title'))}>Button</Text>
            <View>
                <Text style={bem('h5', bem.element('title'))}>Loading</Text>
                <Button onClick={async}>Press me to load</Button>
            </View>
            <View>
                <Text style={bem('h5', bem.element('title'))}>Sizing</Text>
                <Button size={'sm'} style={bem.element('button')}>
                    Small
                </Button>
                <Button size={'md'} style={bem.element('button')}>
                    Middle
                </Button>
                <Button size={'lg'} style={bem.element('button')}>
                    Big
                </Button>
            </View>
        </ScrollView>
    );
}
