# Hex

A hex code for input should always be;

- 7 characters long (including #)
- Only have supported characters of an hex code (abcdef0123456789)

#### hexTo...

Convert hex color to RGB

```js
hexToRgb('#000000'); // {r: 0, g: 0, b: 0})
hexToCmyk('#000000'); // { c: 100, m: 100, y: 100, k: 100 }
hexToHsl('#000000'); // { h: 0, s: 0, l: 0 }
hexToYuv('#000000'); // { y: 0, u: 128, v: 127 }
```

### To Hex

```js
toHex('#000000'); // #0000000
toHex({ r: 0, g: 0, b: 0 }); // #0000000
toHex({ c: 0, m: 0, y: 0, k: 0 }); // #0000000
toHex({ h: 0, s: 0, l: 0 }); // #0000000
toHex({ y: 0, u: 0, v: 0 }); // #008600
```

### Checking

```js
isHex('#000000'); // true;
isHex('#0000000'); // false;
isHex('#00000'); // false;
```
