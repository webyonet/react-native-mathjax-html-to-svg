declare module 'react-native-mathjax-html-to-svg' {
    import {TextStyle, ViewStyle} from 'react-native';
    import {ReactNode} from 'react';

    type Props = {
        fontSize?: number,
        color?: string,
        fontCache?: boolean,
        style?: ViewStyle,
        textStyle?: TextStyle,
        children?: ReactNode,
    };

    export function MathJaxSvg(props: Props) ;
}
