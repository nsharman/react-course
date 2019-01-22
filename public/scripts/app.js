'use strict';

// arugements object - no longer bound with arrow functions

var add = function add(a, b) {

    // console.log(arguments);
    return a + b;
};
console.log(add(1, 2));

// this keyword - no longer bound

var user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

// Challange area

var multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
