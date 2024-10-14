"use strict";
{
    var people = (function () {
        function people(name) {
            this.age = 0;
            this.name = name;
            this.habbit = '';
            this.height = 0;
        }
        people.prototype.eat = function () {
            console.log('eat');
        };
        people.isHuman = true;
        return people;
    }());
    var miike = new people('miike');
    miike.height = 1.7;
}
