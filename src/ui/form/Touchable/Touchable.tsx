import * as React from 'react';
import {
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableHighlightProps,
    TouchableNativeFeedbackProps,
} from 'react-native';

interface IProps
    extends TouchableHighlightProps,
        TouchableNativeFeedbackProps {}

export default function Touchable(props: React.PropsWithChildren<IProps>) {
    const Touchable = Platform.select<any>({
        android: TouchableNativeFeedback,
        ios: TouchableHighlight,
        default: TouchableHighlight,
    });

    return <Touchable {...props}>{props.children}</Touchable>;
}
