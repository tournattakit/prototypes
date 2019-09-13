const { randomCompare } = require('./helper');

Array.prototype.findUnique = function () {
    const result = this.filter((value, index, self) => {
        return (self.filter(v => v === value).length === 1) ? value : null;
    })[0];
    if (typeof result === 'undefined') {
        return null;
    }
    return result;
}
Array.prototype.findAllUnique = function () {
    const result = this.filter((value, index, self) => {
        return (self.filter(v => v === value).length === 1) ? value : null;
    });
    if (result.length === 0) {
        return null;
    }
    return result;
}
Array.prototype.min = function () {
    const notNumber = this.filter(val => typeof val !== 'number');
    if (notNumber.length > 0) {
        throw new TypeError("Array should only contain number");
    }
    return Math.min(...this)
}
Array.prototype.max = function () {
    const notNumber = this.filter(val => typeof val !== 'number');
    if (notNumber.length > 0) {
        throw new TypeError("Array should only contain number");
    }
    return Math.max(...this)
}
Array.prototype.sum = function () {
    const notNumber = this.filter(val => typeof val !== 'number');
    if (notNumber.length > 0) {
        throw new TypeError("Array should only contain number");
    }
    const result = this.reduce((total, value) => total + value, 0);
    return result;
}
Array.prototype.avg = function () {
    const notNumber = this.filter(val => typeof val !== 'number');
    if (notNumber.length > 0) {
        throw new TypeError("Array should only contain number");
    }
    const sum = this.reduce((total, value) => total + value, 0);
    return sum / this.length;
}
Array.prototype.findType = function (type) {
    const values = this.filter(val => typeof val === type);
    return values;
}
Array.prototype.shuffle = function () {
    for (let index = 0; index < this.length; index++) {
        this.sort(randomCompare);
    }
    return this;
}

