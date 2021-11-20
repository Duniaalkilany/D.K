
//build node class ===> value===>stored in the node 
// , next ==>pointer to the next node 
class Node {
    constructor (value,next=null){
this.value=value;
this.next=next
    }
}
//

// class Node {
//     constructor(value,next){
// this.value=value;
// this.next=null
//     }
// }

//export this node class 
module.exports=Node 

