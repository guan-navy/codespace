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
            const resultElement = document.createElement('p');
               

                // 将新元素追加到页面中的容器中
                document.getElementById('resultContainer').appendChild(resultElement);

                // 创建一个新的 <div> 元素，并设置样式
                const createdElement = document.createElement('i');
                createdElement.textContent = '新创建的元素';

                // 设置元素样式
                createdElement.style.position = 'absolute';
                createdElement.style.top = '50%';
                createdElement.style.left = '50%';
                createdElement.style.backgroundColor = '#e0e0e0';
                createdElement.style.padding = '10px';
                createdElement.style.border = '1px solid #ccc';

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