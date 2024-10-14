//使用promise实现一个红绿灯
class TrafficLight {
    constructor(color) {
        this.color = color;
    }
    changeColor(color) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.color = color;
                resolve(this.color);
            }, 1000);
        });
    }
}