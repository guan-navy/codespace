"use strict";
var MessageType72;
(function (MessageType72) {
    MessageType72["image"] = "image";
    MessageType72["text"] = "text";
    MessageType72["audio"] = "audio";
    MessageType72["video"] = "video";
})(MessageType72 || (MessageType72 = {}));
var message72 = [
    {
        id: 1,
        type: MessageType72.text,
        sendmessage: "hello"
    },
    {
        id: 2,
        type: MessageType72.video,
        sendmessage: "hello"
    },
    {
        id: 3,
        type: MessageType72.audio,
        sendmessage: "朝辞白帝彩云间"
    },
    {
        id: 4,
        type: MessageType72.image,
        sendmessage: "送你一朵花"
    }
];
function searchMsg(condition) {
    if (typeof condition === "number") {
        return message.find(function (item) { return item.id === condition; });
    }
    else {
        return message.filter(function (item) { return item.type === condition; });
    }
}
searchMsg(1);
searchMsg(MessageType.image);
