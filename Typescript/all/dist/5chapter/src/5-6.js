"use strict";
function getName56(user) {
    if ('name' in user) {
        return user.name;
    }
    return user.firstName + ' ' + user.lastName;
}
