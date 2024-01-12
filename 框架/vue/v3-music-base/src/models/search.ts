// search 有核心数据 ,接口返回的都要,约束类型
export interface SearchHotDetail {
 searchWord: string;
 score:number;
 content:string;
 source:number;
 iconUrl?:string;//意思为可选
 url:string;
 alg:string;
 
}