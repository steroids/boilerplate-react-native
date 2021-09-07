import * as React from 'react';
import {
    View,
    Text,
    TouchableNativeFeedback,
    Platform,
    ActivityIndicator,
} from 'react-native';
import useBemNative from '../../../hooks/useBem';

import { IButtonViewProps } from '@steroidsjs/core/ui/form/Button/Button';
import Icon from '@steroidsjs/core/ui/icon/Icon';

import Touchable from '../Touchable';

import styles from './ButtonStyles';

interface IProps extends IButtonViewProps {}

export default function Button(props: React.PropsWithChildren<IProps>) {
    const {
        isLoading = false,
        disabled = false,
        iconPosition = 'left',
    } = props;

    const bem = useBemNative('ButtonView', styles);

    // const textColor = () => {
    //     let textColor;
    //     if (props.textColor && bem.color(props.textColor)) {
    //         textColor = bem.color(props.textColor);
    //     } else if (props.outline) {
    //         textColor = bem.color(props.color);
    //     } else {
    //         let isDark =
    //             props.color === 'transparent'
    //                 ? false
    //                 : !color(props.color).isLight();
    //         textColor = isDark ? bem.color('white') : bem.color('gray700');
    //     }
    //
    //     return color(textColor).hex();
    // };

    const renderIcon = () => {
        if (!props.icon || isLoading) {
            return null;
        }

        return (
            <Icon
                style={bem.element('icon', { size: props.size })}
                name={props.icon}
            />
        );
    };

    const renderLabel = () => (
        <View
            style={bem(bem.element('label', { size: props.size }), {
                height: Platform.OS === 'ios' ? 'auto' : '100%',
            })}>
            {isLoading && (
                <ActivityIndicator
                    style={bem.element('preloader', { size: props.size })}
                    color={props.color}
                    size={props.size === 'lg' ? 'large' : 'small'}
                />
            )}
            {iconPosition === 'left' && renderIcon()}
            {React.Children.count(props.children) &&
                ((
                    <Text
                        allowFontScaling={false}
                        numberOfLines={1}
                        style={bem(
                            bem.element('label-text', { size: props.size }),
                            { color: props.textColor },
                            props.labelStyle,
                        )}>
                        {props.children && props.children}
                    </Text>
                ) ||
                    null)}
            {iconPosition === 'right' && renderIcon()}
        </View>
    );

    return (
        <View style={bem.block()}>
            <Touchable
                disabled={disabled}
                onPress={props.onClick}
                background={TouchableNativeFeedback.SelectableBackground()}>
                {renderLabel()}
            </Touchable>
        </View>
    );
}
