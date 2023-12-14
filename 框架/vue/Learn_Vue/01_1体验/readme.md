methods:{
                add:function(){
                    //不能使用箭头函数,里面的this指向windows
                    this.count++;//更新html但是只是更新更改了的地方
                    console.log(this);
                },