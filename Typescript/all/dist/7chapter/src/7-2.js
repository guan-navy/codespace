"use strict";
{
    let MessageType;
    (function (MessageType) {
        MessageType["image"] = "image";
        MessageType["text"] = "text";
        MessageType["audio"] = "audio";
        MessageType["video"] = "video";
    })(MessageType || (MessageType = {}));
    let message = [
        {
            id: 1,
            type: MessageType.text,
            sendmessage: "hello"
        },
        {
            id: 2,
            type: MessageType.video,
            sendmessage: "hello"
        },
        {
            id: 3,
            type: MessageType.audio,
            sendmessage: "朝辞白帝彩云间"
        },
        {
            id: 4,
            type: MessageType.image,
            sendmessage: "送你一朵花"
        }
    ];
    function searchMsg(condition) {
        if (typeof condition === "number") {
            return message.find(item => item.id === condition);
        }
        else {
            return message.filter(item => item.type === condition);
        }
    }
    searchMsg(1);
    searchMsg(MessageType.image);
}
