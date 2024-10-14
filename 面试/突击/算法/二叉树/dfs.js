class BinaryTreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// 创建一个二叉树实例
const bTree = new BinaryTreeNode(
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
// 这是一个类似于下面结构的二叉树：
//     5
//    / \
//   3   7
//  / \ / \
// 2  4 6  8
const res1 = [];
const res2 = [];
const res3 = [];
function firstOrder(node) {
  //中左右
  if(!node) return
  res1.push(node.data)
  firstOrder(node.left)
  firstOrder(node.right)
}
function middleOrder(node) {
    if(!node) return
    middleOrder(node.left)
    res2.push(node.data)
   
    middleOrder(node.right)
}
function lastOrder(node) {
    if(!node) return
   
    lastOrder(node.left)
    lastOrder(node.right)
    res3.push(node.data)
}
firstOrder(bTree)
middleOrder(bTree)
lastOrder(bTree)
console.log('先序遍历',res1);

console.log('中序遍历',res2);
console.log('后序遍历',res3);
