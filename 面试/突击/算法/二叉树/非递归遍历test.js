class BinaryTreeNode {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  
  // 创建一个二叉树实例
  const bTree = (() => {
    return new BinaryTreeNode(
      5, // 根节点的数据
      new BinaryTreeNode(
        3,
        new BinaryTreeNode(2, null, null),
        new BinaryTreeNode(4, null, null)
      ), // 左子树
      new BinaryTreeNode(
        7,
        new BinaryTreeNode(6, null, null),
        new BinaryTreeNode(8, null, null)
      ) // 右子树
    );
  })();
  // console.log(binaryTreeInstance);
  // 这是一个类似于下面结构的二叉树：
  //     5
  //    / \
  //   3   7
  //  / \ / \
  // 2  4 6  8


  function firstOrder(root){
    if(!root) return[]
    const stack = [root]
    const res = []
    while(stack.length!=0){
        const node = stack.pop()
        if(node){
        res.push(node.data)
        node&&stack.push(node.right)
        node&&stack.push(node.left)
        }
        
    }
    return  res
  }
  function lastOrder(root){
    if(!root) return[]
    const stack = [root]
    const res = []
    while(stack.length!=0){
        const node = stack.pop()
        if(node){
        res.push(node.data)
        node&&stack.push(node.left)
        node&&stack.push(node.right)
        
        }
        
    }
    return  res.reverse()
  }
function middleOrder(root){
    if(!root) return
    const stack = []
    const res = []
    let cur = root
    while(stack.length!=0||cur!=null){
        if(cur){
            stack.push(cur)
            cur = cur.left
     
        }else{
            cur = stack.pop()
            res.push(cur.data)
            cur = cur.right
       

        }
    }
    return res
}
  console.log(firstOrder(bTree));
  console.log(lastOrder(bTree));
  console.log(middleOrder(bTree));