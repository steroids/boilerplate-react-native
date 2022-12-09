import React from 'react';
import {View, Text} from 'react-native';

export default function MockScreen(props: any) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 50, color: '#000'}}>
                {props.name}
            </Text>
        </View>
    );
}
