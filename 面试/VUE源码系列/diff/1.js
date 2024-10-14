const oldChildren = n1.oldChildren
const newChildren = n2.newChildren

let lastIndex = 0
let oldStart = 0

for (let i = 0; i < newChildren.length; i++) {
    const newVNode = newChildren[i];
    let j = 0
    let find = false
    for (let j = 0; j < oldChildren.length; j++){
        if(newVNode.key === oldChildren[j].key){
            find = true
            patch(oldVNode,newVNode,container)
            if(j<lastIndex){
                //插入元素性能比新增元素好很多 insertBefore
                const anchor = preventDefault();
                newVNode.el.nextSibling 
                insert(newVNode.val,container,anchor)
            }else{
                lastIndex = j
            }
            break
        }
    }
    
}