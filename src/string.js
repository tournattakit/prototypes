const { randomCompare } = require('./helper');
const spacePattern = /\.|\/|\_|\-|\\|[ \t]|(?=[A-Z])/g;

String.prototype.shuffle = function (keepWhiteSpace) {
    if (keepWhiteSpace) {
        let strArr = this.split(' ');
        for (const i in strArr) {
            strArr[i] = strArr[i].toString().split('').sort(randomCompare).join('');
        }
        return strArr.join(' ');
    }
    return this.split('').sort(randomCompare).join('');
}
String.prototype.toCamelCase = function () {
    const strings = this.split(spacePattern);
    for (const i in strings) {
        const text = strings[i].toString();
        strings[i] = (i == 0) ? text.toLowerCase() : text.charAt(0).toUpperCase() + text.slice(1);
    }
    return strings.join('');
}
String.prototype.toSlashCase = function () {
    const strings = this.split(spacePattern);
    return strings.map(str => str.toLowerCase()).join('/');
}
String.prototype.toSnakeCase = function () {
    const strings = this.split(spacePattern);
    return strings.map(str => str.toLowerCase()).join('_');
}
String.prototype.toPascalCase = function () {
    const strings = this.split(spacePattern);
    for (const i in strings) {
        const text = strings[i].toString();
        strings[i] = text.charAt(0).toUpperCase() + text.slice(1);
    }
    return strings.join('');
}
String.prototype.toCobraCase = function () {
    const strings = this.split(spacePattern);
    for (const i in strings) {
        const text = strings[i].toString();
        strings[i] = text.charAt(0).toUpperCase() + text.slice(1);
    }
    return strings.join('_');
}
String.prototype.toDotCase = function () {
    const strings = this.split(spacePattern);
    return strings.map(str => str.toLowerCase()).join('.');
}
String.prototype.toKebabCase = function () {
    const strings = this.split(spacePattern);
    return strings.map(str => str.toLowerCase()).join('-');
}
String.prototype.separateWords = function (symbol = ' ') {
    const strings = this.split(spacePattern);
    return strings.join(symbol);
}
String.prototype.toSwapCase = function () {
    let chars = this.split('');
    for (const i in chars) {
        const char = chars[i].toString();
        if (char.match(/[A-Z]/g)) {
            chars[i] = char.toLowerCase();
        } else if (char.match(/[a-z]/g)) {
            chars[i] = char.toUpperCase();
        }
    }

    return chars.join('');
}
String.prototype.toMixedCase = function () {
    let chars = this.split('');

    return chars.map((value, index) => chars[index] = (index % 2 === 0) ? value.toUpperCase() : value.toLowerCase()).join('');
}

String.prototype.toProperCase = function () {
    return this.replace(/\b\w/g, (letter) => letter.toUpperCase());
}