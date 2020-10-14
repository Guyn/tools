# Installation

```
// Npm
npm install @guyn/tools

// Yarn
yarn add @guyn/tools
```

# Usage

```js
import { isRgb, rgbToCmyk, rgbToHsl, rgbToYuv, rgbToHex } from '@guyn/tools';

const myColor = { r: 0, g: 0, b: 0 };

if (isRgb(myColor)) {
  console.log('cmyk: ', rgbToCmyk(myColor));
  console.log('hsl: ', rgbToHsl(myColor));
  console.log('yuv: ', rgbToYuv(myColor));
  console.log('hex: ', rgbToHex(myColor));
}
```

Or..

```js
import { toCmyk, toHsl, toYuv, toHex } from '@guyn/tools';

const myColor = { r: 0, g: 0, b: 0 };

console.log('cmyk: ', toCmyk(myColor));
console.log('hsl: ', toHsl(myColor));
console.log('yuv: ', toYuv(myColor));
console.log('hex: ', toHex(myColor));

const myColor2 = '#000000';
console.log('cmyk: ', toCmyk(myColor2));
console.log('hsl: ', toHsl(myColor2));
console.log('yuv: ', toYuv(myColor2));
console.log('hex: ', toHex(myColor2));
```
