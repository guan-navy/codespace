/* *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//二叉树定义
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}
var isBalanced = function(root) {
    console.log(1);
    if(root===null)return true
    console.log(2);
//使用递归遍历
var counter =0
var r1 =0 
var r2 =0
function rec(root){
    counter++
    if(root.left)rec(root.left)
    else if(root.right) rec(root.right)
    else return
    
}
console.log(3);
if(root.left)rec(root.left)
r1 = counter
counter =0
if(root.right)rec(root.right)
r2 = counter
console.log(1);
console.log(r1,r2);
return Math.abs(r2-r1)<=1?true:false
};

var root = new TreeNode(1,null,new TreeNode(2,null,3))
console.log(isBalanced(root))
