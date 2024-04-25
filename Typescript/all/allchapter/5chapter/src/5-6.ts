
interface user1 { name: string }
interface user2 { firstName: string, lastName: string }
function getName56(user: user1 |user2) {
        if('name' in user){
            return user.name;
        }
        return user.firstName + ' ' + user.lastName;
}
