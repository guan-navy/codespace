//为什么需要函数重载好处
type Message =
    {
        id:number,
        type:MessageType,
        sendmessage:string
    }
 enum MessageType{
    "image"=1,
    "text"=2,
    "audio"=3,
    "video"=4

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

function searchMsg71(condition:MessageType|number):Message|Message[]|undefined{
    if(typeof condition==="number"){
        return message.find(item=>item.id===condition)
    }else{
        return message.filter(item=>item.type===condition)
    }
}
//没有快捷提示,使用断言
//  (searchMsg(MessageType.image) as Message[]).concat
 (searchMsg71(1) as Message).sendmessage

//当一个函数接受多种类型的参数的话,因为类型守卫的返回值并不会相同,最后处理函数的返回结果的话呢
// 需要对返回值类型进行判断,然后使用as 进行类型断言才能有自动提示
//如果重载的话,可以减少类型判断
