function getUrlParams(url){
    const arr1 = url.split("?");
    const arr2 = arr1[1].split("&");
    console.log(arr2);
    const arr3 = arr2.map(item => item.split("="));
    const paramsObj = {}
    arr3.forEach(item => {
        paramsObj[item[0]] = item[1]
    })
    return paramsObj;
   
}
var url = "http://example.com/?key1=value1&key2=value2&key1=value3"
console.log(getUrlParams(url));