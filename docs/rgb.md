# RGB

A RGB code for input should always be;

- is an object with r, b, and g keys.

#### rgbTo...

Convert hex color to RGB

```js
rgbToHex({ r: 0, g: 0, b: 0 }); // #000000
rgbToCmyk({ r: 0, g: 0, b: 0 }); // { c: 100, m: 100, y: 100, k: 100 }
rgbToHsl({ r: 0, g: 0, b: 0 }); // { h: 0, s: 0, l: 0 }
rgbToYuv({ r: 0, g: 0, b: 0 }); // { y: 0, u: 128, v: 127 }
```

### To RGB

```js
toRgb('#000000'); // { r: 0, g: 0, b: 0 }
toRgb({ r: 0, g: 0, b: 0 }); // { r: 0, g: 0, b: 0 }
toRgb({ c: 0, m: 0, y: 0, k: 0 }); // { r: 0, g: 0, b: 0 }
toRgb({ h: 0, s: 0, l: 0 }); // { r: 0, g: 0, b: 0 }
toRgb({ y: 0, u: 128, v: 127 }); // { r: 0, g: 0, b: 0 }
```

### Checking

```js
isRgb({ r: 0, g: 0, b: 0 }); // true;
isRgb({ r: 0, g: 0, b: -1 }); // false;
isRgb({ r: 0, g: 0, b: 256 }); // false;
isRgb({ r: 0, g: 0, b: 0, a: 1 }); // false;
```
