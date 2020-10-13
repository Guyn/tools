# Guyn Tools

### Convert, find, check and manipulate colors.

Guyn Tools is a collection of Javascript functions to deal with colors.

## Convert

#### rgbToHex

Convert rgb color to hex

```js
rgbToHex({ r: 0, g: 0, b: 0 }); // #000000
```

#### hexToRgb

Convert hex color to rgb

```js
hexToRgb('#000000'); // {r: 0, g: 0, b: 0})
```

#### rgbToHsl

Convert rgb color to hsl

```js
rgbToHsl({ r: 0, g: 0, b: 0 }); // {h: 0, s: 0, l: 100}
```

#### hexToHsl

Convert hex color to hsl

```js
hexToHsl('#000000'); // {h: 0, s: 0, l: 100}
```

## Checking

#### isHex

Is this string a hex color?

```js
isHex('#000000'); // true
isHex('#00000'); // false
isHex('#000'); // false
isHex('#ff00gg'); // false
```

#### isObjectString

Check if a string could be a valid object.

```js
isObjectString('something'); // false
isObjectString('"{"test":"test"}"'); // true
```

## Hex Strings

#### toHexChars

Convert a possible hex color code to a valid hex color code

```js
toHexChars(' #00aa 00'); // #00aa00
toHexChars('#fff'); // #ffffff;
toHexChars('#fffaabbaa'); // #fffaab;
```

#### toHexCharsGroup

Convert an array of possible hex color codes to valid color codes.

```js
toHexChars([' #00aa 00', '#fff']); // ['#00aa00', '#ffffff']
```

#### findHex

Find all Hex colors in a string

```js
findHex('#000#aaa#abcdef'); // ['#000000','#aaaaaa', '#abcdef']
```
