# React Native component to display Html Latex using MathJax without WebView

## Installation
```
$ yarn add react-native-mathjax-html-to-svg react-native-svg
```

## Usage
```javascript
import MathJaxSvg from 'react-native-mathjax-html-to-svg';

...

<MathJaxSvg 
  fontSize={16}
  color="red"
  fontCache={true}>
  4sen(α)cos^2(α/2)
</MathJaxSvg>
```

|  Props            | Default                    | Description                             |
| ----------------- | -------------------------- | --------------------------------------- |
|  fontSize         | 14                         | Font size to display formula. Note that it will apply to normal text. Regular text accept inline style if html has inline style        |
|  color            | "#000000"                  | Color of formula to display. Note that it will apply to normal text. Regular text accept inline style if html has inline style             |
|  fontCache        | false                      | MathJax will cache font paths on an express-by-expression (each expression has its own cache within the SVG image itself), which makes the SVG self-contained, but still allows for some savings if characters are repeated               |
|  style            | `{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', flexShrink: 1 } `          | Container style             |


[comment]: <> (## Example)

[comment]: <> ([https://github.com/railsjack/demo-app-for-mathjax]&#40;https://github.com/railsjack/demo-app-for-mathjax&#41;)
