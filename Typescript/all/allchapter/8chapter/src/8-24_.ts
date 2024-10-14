


//泛型的好处在运行的时候推断出类型，因为直接使用object类型，无法推断出类型
//K是类型T的属性
function pickValues<T extends object, K extends keyof T>(arr: T[], ...keys: K[]): Partial<T>[] {
    return arr.map(obj => {
        const newObj: Partial<T> = {};
        keys.forEach(key => {
            if (obj.hasOwnProperty(key)) { //如果对象有该属性，则添加到新对象中
                newObj[key] = obj[key];
            }
        });
        return newObj;
    });
}

// 示例用法
const objects = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'Los Angeles' },
    { name: 'Charlie', age: 35, city: 'Chicago' }
];

const pickedValues = pickValues(objects, 'name');
console.log(pickedValues);