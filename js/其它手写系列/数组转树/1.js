const items = [
    { id: 1, parentId: null, name: '根节点' },
    { id: 2, parentId: 1, name: '子节点 1' },
    { id: 3, parentId: 1, name: '子节点 2' },
    { id: 4, parentId: 2, name: '子节点 1-1' },
    { id: 5, parentId: 2, name: '子节点 1-2' },
    { id: 6, parentId: null, name: '根节点 2' },
    { id: 7, parentId: 6, name: '子节点 2-1' },
  ];
  function arrToTree(arr){
    const roots =[]
    if(arr instanceof Array){
        const map = {}
        arr.forEach((item)=>{
            item['children']=[]
            map[item.id] = item
        })
        arr.forEach((item)=>{
            if(item.parentId==null){
                roots.push(map[item.id]) //根节点
            }else{
                map[item.parentId].children.push(map[item.id])
            }
        })

        return roots
    }
    else return 
  }
  const tree = 
  arrToTree(items)
  console.log(tree);
  