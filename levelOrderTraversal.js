/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


var levelOrder = function(root) {
  var result = [];
  var queue = [[root, 0]];
  var node, depth;

  if (!root)  return result;

  while (queue.length) {
    task = queue.shift();

    node = task[0];
    depth = task[1];

    if (!Array.isArray(result[depth])) result[depth] = [];
    
    result[depth].push(node.val);

    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }

  return result;
};


let myTree = new TreeNode(3);
myTree.right = new TreeNode(20);
myTree.left = new TreeNode(9);
myTree.right.left = new TreeNode(5);
myTree.right.right = new TreeNode(7);

console.log(levelOrder(myTree))