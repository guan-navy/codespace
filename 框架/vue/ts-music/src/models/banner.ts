// 给banner这个接口建立一个接口
// 1.接口 ：3000/banner -> store ->  component 
// 2.接口 ：类Java等强类型的接口定义  可以使用ts进行类型检测
// 模型接口
// 数据表

export interface Banner {
    pic:string;
    targetId:number;
    targetType:number;
    typeTitle:string;
    bannerId:number;
}

// 跟vuex 一道，把数据严谨再严谨
// let banner:Banner = {pic: "范家吵架图",targetId:1,....}