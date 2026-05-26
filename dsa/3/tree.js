// class treeNode{
//     constructor(data){
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }


// let root = new treeNode(0);
// root.left = new treeNode(1);
// root.right = new treeNode(2);


class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;

    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(x){
        let node = new Node(x);
        if(!this.root){
            this.root = node;
            return;
        }

        let curr = this.root;
        while(true){
            if(x<curr.value){
                if(!curr.left){
                    curr.left = node;
                    return;
                }
                curr = curr.left;
            }else{
                if(!curr.right){
                    curr.right = node;
                    return;
                }
                curr = curr.right;
            }
        }
    }

    search(x){
        if(!this.root) return false;

        let curr = this.root;
        while(curr){
            if(curr.value===x) return true;
        if(x<curr.value){
            curr = curr.left;
        }else{
            curr = curr.right;
        }
        }

        return false;
    }


    minVal(){
        if(!this.root) return null;
        let curr = this.root
        while(curr.left){
            curr = curr.left;
        }
        return curr.value;
    }


    preorder(root = this.root){
        if(!root) return;
        console.log(root.value);
        this.preorder(root.left);
        this.preorder(root.right);
    }

    inorder(root = this.root){
        if(!root) return;
        this.inorder(root.left);
        console.log(root.value);
        this.inorder(root.right);
    }

    postorder(root = this.root){
        if(!root) return;
        this.postorder(root.left);
        this.postorder(root.right);
        console.log(root.value);
    }

    bfs(){
        let q = [this.root];
        let res = [];
        let i=0;
        while(i<q.length){
            let node = q[i++];
            res.push(node.data);
            
            if(node.left)q.push(node.left);
            if(node.right)q.push(node.right);
        }
        return res;
    }

}