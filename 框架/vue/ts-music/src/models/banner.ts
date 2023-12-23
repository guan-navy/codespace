// 给banner 接口建立一个接口

// 接口 :3000/banner -> store -> commmponent
export interface Banner{
    pic:string;
    targetId:number;
    targetType:number;
    typeTitle:string;
    bannerId:number;
}

// let banner:Banner = {
//     pic: '你好'
// }