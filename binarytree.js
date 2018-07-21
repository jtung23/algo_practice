// https://www.youtube.com/watch?v=13m9ZCB8gjw&t=354s

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  };
  // create nodes
  var root = new Node(1);
  var n1 = new Node(2);
  var n2 = new Node(3);
  var n3 = new Node(4);
  var n4 = new Node(5);
  // setup children
  root.left = n1;
  root.right = n2;
  n1.left = n3;
  n1.right = n4;


//   
// Solution!!!!!!! ///////////////*************************** */
  //lcd === lowestCommonDemoninator
  const lcd = (root, n1, n2) => {
    if (root == null) {
      return null;
    }
    if (root.data == n1 || root.data == n2) {
      return root;
    }
    let left = lcd(root.left, n1, n2);
    let right = lcd(root.right, n1, n2);
    if (left != null && right != null) {
      return root;
    } 
    
    return left != null ? left : right;
  }
  lcd(root, 2,4) // => Node { data: 2, .. }```