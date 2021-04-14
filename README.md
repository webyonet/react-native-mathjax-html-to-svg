# React Native component to display mathematics in HTML using MathJax without WebView

A react native component used to easily display and handle mathematics (TeX or LaTeX) in html. The library does not use Web View.

## Installation
```bash
$ yarn add react-native-mathjax-html-to-svg
```
```bash
$ yarn add react-native-svg
```
```bash
$ cd ios && pod install
```

## Usage
**Attention only accepts in-line mathematics.** [see](http://docs.mathjax.org/en/latest/basic/mathematics.html)
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
## Using TeX or LaTeX with html
```jsx
import MathJaxSvg from 'react-native-mathjax-html-to-svg';

return (
  ...

<MathJaxSvg 
  fontSize={16}
  color="#000000"
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
