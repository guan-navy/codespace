// 7-10.ts

import CommercialBank from "./7-9";
// type ConstructorType710 = new (...args: any[]) => CommercialBank 

function createFactoryConstructor( ConstructorType: new (...args: any[]) => any  ){
    console.log(ConstructorType.name+'被创建');
    new ConstructorType()
    
}
createFactoryConstructor(CommercialBank)
