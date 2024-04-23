"use strict";
{
    class people {
        constructor(name) {
            this.age = 0;
            this.name = name;
            this.habbit = '';
            this.height = 0;
        }
        eat() {
            console.log('eat');
        }
    }
    people.isHuman = true;
    let miike = new people('miike');
    miike.height = 1.7;
}
