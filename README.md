# React Native component to display Latex in HTML using MathJax without WebView

## Installation
```bash
$ yarn add react-native-mathjax-html-to-svg react-native-svg
```

## Usage
```jsx
import MathJaxSvg from 'react-native-mathjax-html-to-svg';

...

<MathJaxSvg 
  fontSize={16}
  color="red"
  fontCache={true}
>
  {'$$4sen(α)cos^2(α/2)$$'}
</MathJaxSvg>
```
## Use in HTML
```jsx
import MathJaxSvg from 'react-native-mathjax-html-to-svg';

return (
  ...

<MathJaxSvg 
  fontSize={16}
  color="red"
  fontCache={true}
>
  {`
    <p>When \\(a \\ne 0\\), there are <u>two solutions</u> to \\(ax^2 + bx + c = 0\\) <span style="color:red;">and</span> they are $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$</p>
    <b>In-line Mathematics</b><br/><p>Finally, while display equations look good for a page of samples, the ability to mix math <mark>and text in a paragraph is also important.</mark><br/><b>This expression \\(\\sqrt{3x-1}+(1+x)^2\\) is an <span style="color:red;font-style:italic;">example of an inline equation</span>.</b>As you see, MathJax equations can be used this way as well, without unduly disturbing the <s>spacing between lines</s>.</p>
  `}
</MathJaxSvg>
  ...
);
```
### Export
<img width="600" src="https://raw.githubusercontent.com/webyonet/react-native-mathjax-html-to-svg/main/export.png"/>

|  Props            | Default                    | Description                             |
| ----------------- | -------------------------- | --------------------------------------- |
|  fontSize         | 14                         | Font size to display formula. Note that it will apply to normal text. Regular text accept inline style if html has inline style        |
|  color            | "#000000"                  | Color of formula to display. Note that it will apply to normal text. Regular text accept inline style if html has inline style             |
|  fontCache        | false                      | MathJax will cache font paths on an express-by-expression (each expression has its own cache within the SVG image itself), which makes the SVG self-contained, but still allows for some savings if characters are repeated               |
|  style            | `{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', flexShrink: 1 } `          | Container style             |


[comment]: <> (## Example)

[comment]: <> ([https://github.com/railsjack/demo-app-for-mathjax]&#40;https://github.com/railsjack/demo-app-for-mathjax&#41;)
