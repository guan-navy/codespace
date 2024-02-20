let obj ={
    name:'foo',
     get age(){
        return 18
     },
     set age(newVal){
       console.log(newVal);
     }
}
obj.age= 19
// console.log(obj.age)