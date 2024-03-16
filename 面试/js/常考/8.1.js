function Parent() {
this.name = '你爸爸的名字'
this.like = [1,2]
}
Child.prototype = new Parent
function Child
() {
this.age = 19
}

let child = new Child()
console.log(child.name);

//