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

//先序
const res1 = [];
function firstOrder(root) {
  if (!root) return;
  res1.push(root.data);
  firstOrder(root.left);
  firstOrder(root.right);
}
//中序
const res2 = [];
function middleOrder(root) {
  if (!root) return;
  middleOrder(root.left)
  res2.push(root.data)
  middleOrder(root.right)
}
//后序
const res3 = [];
function lastOrder(root) {
    if (!root) return;
    lastOrder(root.left)
    lastOrder(root.right)
    res3.push(root.data)
}
firstOrder(binaryTreeInstance)
middleOrder(binaryTreeInstance)
lastOrder(binaryTreeInstance)
console.log(res1, res2, res3);