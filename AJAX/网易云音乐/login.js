let email = document.getElementById('email');

console.log(email);
let password = document.getElementById('password');

console.log(password);
let confir = document.getElementById('confirm')

confir.addEventListener('click',()=>{
    let emailN =email.value
    let passwordN = password.value
 if(emailN && passwordN){
    fetch(`http://192.168.31.45:3000/login?username=${emailN}&password=${passwordN}`
        
    )
    .then(response => response.json())
    .then(result => {
        if(result.message=='成功'){
            const newElement = document.createElement('i');
               

                // 将新元素追加到页面中的容器中
                document.body.appendChild(newElement);

                
                createdElement.textContent = '新创建的元素';

                // 设置元素样式
                newElement.style.position = 'absolute';
                newElement.style.top = '50%';
                newElement.style.left = '50%';
                newElement.style.backgroundColor = '#e0e0e0';
                newElement.style.padding = '10px';
                newElement.style.border = '1px solid #ccc';

                // 将新创建的元素追加到页面中的容器中
                document.getElementById('resultContainer').appendChild(createdElement);
                setTimeout(() => {
                    createdElement.style.display = 'none';
                }, 2000);
        }
    })
    .catch(error => {
        console.error('错误:', error);
    });
}
 

})