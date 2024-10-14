// const  game =  require('./game.js');//common js

var winCount = 0;

// process是node里面的进程对象,documnet
// 在命令行输入的时候 事件监听器

//二进制缓冲流 使用16进制表示

//字节流

// commonjs 
const game = require('./game.js');

var winCount = 0;
// node 内置的process进程对象， document 
// 在命令行输入的时候 事件
process.stdin.on('data', (buffer) => {
    // console.log(buffer)
    const action = buffer.toString().trim();
    console.log(action);
    const result = game(action)

    if (result == 1) {
        winCount++;
        if (winCount == 3) {
            console.log('我不玩了！');
            process.exit();
        }        
    }
})