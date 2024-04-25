{
    //为什么需要函数重载好处
type Message =
{
    id:number,
    type:MessageType,
    sendmessage:string
}
enum MessageType{
"image"= "image", 
"text"= "text",
"audio"= "audio",
"video"= "video"


}
let message:Message[]=[
{
    id:1,
    type:MessageType.text,
    sendmessage:"hello"
},
{
    id:2,
    type:MessageType.video,
    sendmessage:"hello"
},
{
    id:3,
    type:MessageType.audio,
    sendmessage:"朝辞白帝彩云间"
},
{
    id:4,
    type:MessageType.image,
    sendmessage:"送你一朵花"
}
]
//一种类型参数对于一种类型的返回值,返回值类型无关
function searchMsg(condition:number):Message|undefined
function searchMsg(condition:MessageType):Message[]
//实现签名,实现签名必须实现重载签名
function searchMsg(condition:MessageType|number):Message|Message[]|undefined{
if(typeof condition==="number"){
    return message.find(item=>item.id===condition)
}else{
    return message.filter(item=>item.type===condition)
}
}

searchMsg(1)
searchMsg(MessageType.image)

}    