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
  if (!root) return;
  const res = [];
  const queue = [];
  queue.push(root);
  while (queue.length) {
    //只要队列不为空
    const size = queue.length; //记录这一层的节点数,因为在遍历的时候也会再次添加节点到队列当中去，所以需要记录
    const curLevel = [];
    for (let i = 0; i < size; i++) {//将这层的节点一边出队,一边将其子节点存入队列,size用于区分是不是属于这层的节点
      const node = queue.shift();
      curLevel.push(node.data);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(curLevel);//将一层的节点放入结果数组当中
  }
  return res
}
console.log(levelOrder(binaryTreeInstance));
