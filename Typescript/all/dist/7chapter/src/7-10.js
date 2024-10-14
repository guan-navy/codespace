import CommercialBank from "./7-9";
function createFactoryConstructor(ConstructorType) {
    console.log(ConstructorType.name + '被创建');
    new ConstructorType();
}
createFactoryConstructor(CommercialBank);
