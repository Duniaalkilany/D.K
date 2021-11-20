const Node =require('./treeNode')

class BinaryTree{
    constructor(root){
this.root=root
    }

    preOrder(){
        let resArray=[]
        //arrow function 
        let traverse=(node)=>{

            resArray.push(node.value)

            if(node.left)traverse(node.left)

            if(node.right)traverse(node.right)
        }
        traverse(this.root)
        return resArray
    }

    
  inOrder(){
        let resArray=[]
        let traverse=(node)=>{
if(node.left)traverse(node.left)
resArray.push(node.value)
if(node.right)traverse(node.right)
        }
        traverse(this.root)
        return resArray
    }

    postOrder(){
        let resArray=[]

        let traverse=(node)=>{
            if(node.left)traverse(node.left)
            if(node.right)traverse(node.right)
            resArray.push(node.value)
        }
        traverse(this.root)
        return resArray
    }
}