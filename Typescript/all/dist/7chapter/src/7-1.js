"use strict";
var MessageType;
(function (MessageType) {
    MessageType[MessageType["image"] = 1] = "image";
    MessageType[MessageType["text"] = 2] = "text";
    MessageType[MessageType["audio"] = 3] = "audio";
    MessageType[MessageType["video"] = 4] = "video";
})(MessageType || (MessageType = {}));
var message = [
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
function searchMsg71(condition) {
    if (typeof condition === "number") {
        return message.find(function (item) { return item.id === condition; });
    }
    else {
        return message.filter(function (item) { return item.type === condition; });
    }
}
searchMsg71(1).sendmessage;
