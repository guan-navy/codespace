//广度优先
//大厂面试的准备策略大厂面经
function bfs(root){
//队列先进先出
const queue = [root];

while(queue.length){
    const node = queue.shift();
    console.log(node.value);
    node.children.forEach(child => {
        if(!child.visited){
            queue.push(child);
            child.visited = true;
        }
    });
}

}