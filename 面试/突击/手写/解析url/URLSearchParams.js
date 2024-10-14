var url = "http://example.com/?key1=value1&key2=value2&key1=value3"

var urlObj = new  URL(url);
var urlSearchParams = new URLSearchParams(urlObj.search);
urlSearchParams.append("key4", "value4");
urlSearchParams.delete("key1");
urlSearchParams.set("key2", "value5");
console.log(urlObj);