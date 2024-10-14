class BinaryTreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// 创建一个二叉树实例
const binaryTreeInstance = (() => {
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

//使用栈来模拟递归行为

function firstOrder(root) {
  if (!root) return;
  const stack = [root];
  const res = [];
  while (stack.length) {
   
    const node = stack.pop();
    if(node){
    res.push(node.data);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
    }else{
        continue
    }
    
  }
  return res
}
function lastOrder(root) {
    if (!root) return;
    const stack = [root];
    const res = [];
    while (stack.length) {
     
      const node = stack.pop();
      if(node){
      res.push(node.data);
      //将这里的逻辑翻一下,因为这里入栈的先序是中右左,后序是左右中
    //   颠倒一下是就是左右中了
      node.left && stack.push(node.left);

      node.right && stack.push(node.right);
      }else{
          continue
      }
      
    }
    return res.reverse();
  }
function middleOrder(root) {
    if(!root) return
    const stack = [];
    const res = []
    let cur = root //通过该指针实现遍历
    while(stack.length!==0||cur!==null){
 
        if(cur){
            stack.push(cur)
            cur = cur.left
        }else{
            cur = stack.pop()//左子树已经遍历完成
            res.push(cur.data)
            cur = cur.right
        }
    }
    return res
}
console.log(firstOrder(binaryTreeInstance));
console.log(lastOrder(binaryTreeInstance));
console.log(middleOrder(binaryTreeInstance));

