const helper = {
    randomCompare() {
        const random = Math.random();
        if (random > 0.67) {
            return -1;
        } else if (0.67 >= random > 0.34) {
            return 1;
        } else {
            return 0;
        }
    }
}

module.exports = helper;