//监听用户敲enter键读取输入框的值
var input=document.getElementById("text");
var ul=document.getElementById("list");
input.onkeyup=function(e) {
    if(e.keyCode==13){
        if(input.value !==" "){
     //生成li结构
     var todoList=`
         <li>
                <input type="checkbox">
                <span>${input.value}</span>
        </li>
     `  
     //将li添加到ul当中
     ul.insertAdjacentHTML("afterbegin",todoList);
     input.value=" "
        
        }
     
    }
    
    // var todoItemArr=[]
    // input.onkeyup=function(e) {
}

function makeList(){
    //生成多份li添加到ul中
}






