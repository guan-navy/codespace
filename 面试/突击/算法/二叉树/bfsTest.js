class BinaryTreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// 创建一个二叉树实例
const binaryTreeInstance = new BinaryTreeNode(
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

function levelOrder(root) {
  if (!root) return; //根节点为空直接返回
  //使用队列来维护遍历的顺序
  const queue = [root];
  const res = [];
  while (queue.length > 0) {
    let size = queue.length; //记录当前层级的节点个数,循环遍历的时候可以区分层级
    const cur = [];
    while (size--) {
      const node = queue.shift(); //先进先出队列

      cur.push(node.data);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(cur);
  }
  return res
}
console.log(levelOrder(binaryTreeInstance));
