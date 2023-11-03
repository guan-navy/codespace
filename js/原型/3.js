// Car.prototype={
//    height:1400,
//     lan:4900,
// name:'BMW'

// }
Car.prototype.height=1400
Car.prototype.lan=4900
Car.prototype.name='BMW'
function Car(owner,color){
    
    this.owner=owner
    this.color=color
}
var car1 = new Car('浪哥','red')
var car2 = new Car('但总','black')
car1.color='pink'
console.log(car1)
console.log(car2)