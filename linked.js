// //function //arroiw function //recursion 

// //function to append nodes for the linked list and Recursive insertion 
// //recursion function ===>function call it self until base condition stop it 
// //so recursion function have two parts 
// //1.base condition 
// //2.call function //usually with different arrguments which bass at the first time 



// function printFun(test)
//     {
//         if (test < 1)
//             return;
//         else {
//             document.write(test + " ");
//             printFun(test - 1); // statement 2
//             document.write(test + " ");
//             return;
//         }
//     }
 
// Driver code
  
// test = 3;
//     printFun(test);

//     function fun(x)
//     {
//         if (x > 0)
//         {
//             x -= 1
//             fun(x)
//             document.write(x + " ");
//             x -= 1
//             fun(x)
//         }   
//     }

//     let a = 4;
// fun(a)
const Node = require('./node')
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }
}

 function append(list,value){
const node = new Node(value)
if(list.head==null){
   list.head=node

}else{
    let current=list.head
    while (current.next) {
        current=current.next
        
    }
    current.next=node
}
}

module.exports=LinkedList
//crete new list
const list=new LinkedList()
//call the function(list,value)
append(list,1)
append(list,2)
append(list,3)
console.log(list);