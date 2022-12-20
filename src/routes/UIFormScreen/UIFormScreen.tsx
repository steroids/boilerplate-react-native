import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import {Form, CheckboxField} from '@steroidsjs/core/ui/form';
import Icon from '@steroidsjs/core/ui/icon/Icon/Icon';
import useBemNative from '@steroidsjs/native/hooks/useBemNative';
import DateTimeField from '@steroidsjs/native/ui/form/DateTimeField';

import styles from './UIFormScreenStyles';

export default function UIFormScreen() {
    const bem = useBemNative('UIFormScreen', styles);
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={bem.block()}
        >
            <View style={bem.element('container')}>
                <Text style={bem.element('text')}>
                    Switch ACTIVE
                </Text>
                <Form formId='TEST_1'>
                    <CheckboxField
                        attribute='test1'
                    />
                </Form>
            </View>
            <View style={bem.element('container')}>
                <Text style={bem.element('text')}>
                    Switch DISABLED
                </Text>
                <Form formId='TEST_2'>
                    <CheckboxField
                        attribute='test1'
                        disabled
                    />
                </Form>
            </View>
            <View style={bem.element('container')}>
                <Text style={bem.element('text')}>
                    DateTiemField
                </Text>
                <Form formId='TEST_3'>
                    <DateTimeField
                        attribute='date'
                    />
                </Form>
            </View>
            <View style={bem.element('container')}>
                <Text style={bem.element('text')}>
                    Icon (default)
                </Text>
                <Icon
                    name='barcode'
                />
            </View>
            <View style={bem.element('container')}>
                <Text style={bem.element('text')}>
                    Icon (size)
                </Text>
                <Icon
                    name='barcode'
                    size={40}
                />
            </View>
            <View style={bem.element('container')}>
                <Text style={bem.element('text')}>
                    Icon (color)
                </Text>
                <Icon
                    name='barcode'
                    fill="blue"
                />
            </View>
        </ScrollView>
    );
}
