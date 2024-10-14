
//深度优先
function dfs(node){
    console.log(node.value);
    for(let child of node){
        dfs(child);
    }
}