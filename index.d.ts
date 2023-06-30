declare module 'react-native-mathjax-html-to-svg' {
    import {StyleProp, ViewStyle} from 'react-native';
    import {ReactNode} from 'react';

    type Props = {
        fontSize?: number
        color?: string
        fontCache?: boolean
        style?: StyleProp<ViewStyle>
        children?: ReactNode
    };

    export function MathJaxSvg(props: Props) ;
}
