//require node class 

//buils linkedlist class //in the constructoer ==> inside LL ===>haad=null

/**
 class LinkedList{
     constructor(){
         this.head=null;
         this.size=0
     }
 //output of each create of new linkedlist ===>const newLinked= new LinkedList()===>LinkedList{
     head:null,
     size:0

 }
 */
 /*inside the class i have methods    
 
 1.inseration mathods===> insert ===> add node to the begining of the linked list
 
 ** decleare methods inside the ll class ,
 1. insert method will take value==>i want to insert as parameter .
//input===>value
return===>nothing or (new LL with the newe value)
//parameter(value)
//create new node using node class const node = new Node(value)
//check if LL is empty or not (!this.head)==>method
or (head==NULL)==>function==>(head here is also parameter)
//if empty ==>add value directly to the head 
this.head=node
//else 
//node.next=this.head====>i store head in the next 
//this.head=node 


 2.includes
 3.append
 4.insertbefore
 5.insertafter
 6.insertAt
 7.indexOf
 8.removeFRom
 9.removeElements
 10.reverse
 11.zipList
 12.kFromEnd
 13.plaindrom


 nameofnethod (){

 }
 */

 const Node=require('./node')

 class LinkedList{
     constructor(){
this.head=null;
this.size=0
     }
insert(value){
const node = new Node(value)
if(this.head==null){
this.head=node
this.size++
}else{
    node.next=this.head
    this.head=node
    this.size++
}
}
//input===>value
//output==>boolen
includes(value){
let current=this.head
while(current){
    if(current.value==value){
        return true
    }
    console.log('continuee');
    current=current.next
}
return false
 }
//input==>value
//output==>linledlist with new node add at the end of the linked list 
//create new node with the new value 
//check empty//
//empty==>add direct to the head ===> this.head=node
//let current=this.head
//looping while i have current.next
//current.next=node===>add node to the end of the linkedList
append(value){
const node=new Node(value)
if(!this.head){
    this.head=node
    this.size++
}else{
    let current=this.head
    while(current.next){
current=current.next
    }
    //out of loop 
current.next=node
this.size++
}
}

insertBefore(value,newValue){
const newNode= new Node(newValue)
let current=this.head
if(current.value===value){
    newNode.next=current
    this.head=newNode
    this.size++
}else{
    while(current.next){
        if(current.next.value===value){
            newNode.next=current.next
            current.next=newNode
            this.size++
            break;
        }
        //out if //inside while
        current=current.next
    }
}
}

insertAfter(value,newValue){
const newNode=new Node(newValue)
let current=this.head
while(current){
    if(current.value===value){
        newNode.next=current.next
        current.next=newNode
        break
    }
    current=current.next
}
}

insertMiddle(value){
const newNode= new Node(value)
if(!this.head){
 this.head=newNode
 this.size++

}else{
    let current=this.head
    let middle=this.head
    while(current.next!==null&&current.next.next!==null){
current=current.next.next
middle=middle.next
    }
    newNode.next=middle.next
    middle.next=newNode
    this.size++
}
}


// insertMiddle(value) {
//     let newNode = new Node(value);
//     let cur = this.head
//     let prev;
//     let mid = Math.floor(this.size / 2);
//     let count = 1;
//     while (count <= mid) {
//         count++; //to let you know you are in which node 
//         prev = cur;
//         cur = cur.next;

//     }
//     prev.next = newNode;
//     newNode.next = cur;
//     this.size++;

// }

indexOf(value){
let current=this.head
let count=0
while(current){
    if(current.value===value){
        return count
    }
    count++
    current=current.next
}
return'not found'

}

insertAt(value,index){
    const newNode=new Node(value)
    
if(index<0){
    return 'invaliddd'
}else if (index==0){
    console.log('nnnn');
 newNode.next=this.head
 this.head=newNode
}else{
    console.log('cvbnm');
    let current=this.head
    let prev;
    let count=0
    while(count<index){
        console.log('guiiiiiiiiiiiii');
        count++
        prev=current
        current=current.next
    }
    newNode.next=prev.next
    prev.next=newNode
}
}

//removespecific value
//input==>value
//output==>return 
removeElement (value){
    let current=this.head
    let prev=null
    while(current!=null){
    if (current.value===value){
        if(prev==null){
            this.head=current.next
        }else{
        prev.next=current.next
        
        }
        let jj=current.value
        return (console.log(current.value));
    }
        prev=prev.next
        current=current.next
    }
  
}
//remove node at specefic index 
removeFrom(index){
if(index<0){
    return 'invalid'
}else{
    let current=this.head
    let prev
    let count=0
    if(index==0){
this.head=current.next
    }else{
while(count<index){
    count++
    prev=current
    current=current.next

}
//current refere to the index i want to delete 
prev.next=current.next
    }
    return console.log(current.value); 
}
}


removeDuplicated(){
    let current=this.head;
    let prev;
    while(current){
        prev=current
        current=current.next
        while(current!=null&&prev.value==current.value){
            current=current.next
              
        }
        //currnt will stop on the non duplicated node 
        prev.next=current
    }
}


//reverse linked list
//input===>(list)

// reverse(list){
//     //create new list 
// let newList=new LinkedList()
// let current=list.head
// while (current) {
//     newList.insert(current.value)
// current=current.next
// }
// return newList.toString()
// }

//another method to revese ll 


reverse() {
    let prev = null,
     current = this.head
    let next = current ? current.next : null
    while (current) {
        this.head = current;
        next = current.next;
        current.next = prev;
        prev = current
        current = next;

    }
    return (this.head)
}


//zip two linked list 

//input ==>two linked list 
//output==>ziped linked list 
zipLiked(list1,list2){
let ziped=new LinkedList()

let current1=list1.head
let current2=list2.head

while (current1||current2) {
    if(current1){
ziped.append(current1.value)
current1=current1.next
    }

    if(current2){
        ziped.append(current2.value)
        current2=current2.next
    }
}
return ziped.toString
}


//check plindrome
// palindrome: a word, phrase, number, or sequence of nodes which reads the same backward as forward.
//example of plindrome linkedList==>howoh
//inout==>ll to check 
//output ==>boolean

plindrome(){
    let linkedArray=[]
    let current=this.head
    while (current) {
        linkedArray.push(current.value)
        current=current.next
    }
console.log(linkedArray);
    let left=0
    let right=linkedArray.length-1

    while (left<=right) {
        if(linkedArray[left]!==linkedArray[right]){
            return false
        }
        left++
        right--
    }
    return true
}


//kFromEnd===> return the value of the node that places at k from the end
//input ==>k 
//output==>node value
kFromEnd(k){
    let current=this.head
    let length=1
    while (current.next) {
        current=current.next
        length+=1

    }
    if(k<0||k>length){
        return 'invalid'
    }else if (k===0){
return current.value
    }else{
        current=this.head
        for(let i=1;i<length-k;i++){
current=current.next
        }
        return current.value
    }
}

toString(){
    let string=''
    let current=this.head
    while(current){
        string+=`{${current.value}}-->`
        current=current.next
    }
    string+=`NULL`
    return string
// return `${string}NULL`

}

 }

//export linkedlist class
module.exports=LinkedList


 const linked=new LinkedList()
 const linked1= new LinkedList()
 const linked2=new LinkedList()

// console.log('linked1',linked1);
linked1.insert('h')
linked1.insert('o')
linked1.insert('w')
linked1.insert('7')
linked1.insert('h')

linked.insert(10)
linked.insert(11)
linked.insert(12)
linked.insert(13)
linked.insert(14)
linked.insert(50)
// console.log('linked1',linked1);
// console.log('linked1',linked1.head);//value:3
// console.log('linked1',linked1.head.next);//2
// console.log('linked1',linked1.head.next.next)
// console.log(linked1.includes(3))
// console.log(linked1.includes(7))
// linked1.append(4)
// linked1.append(5)
// linked1.append(6)
//  console.log(linked1);
//  linked1.insertBefore(2,8)
//  console.log('append',linked1);
//  linked1.insertAfter(2,10)
// console.log(linked1.insertMiddle(12)); 

//  console.log(linked1.indexOf(2));
//  console.log(linked1.indexOf(90));
// linked1.insertAt(700,0);
// linked1.removeElement(700)
// linked1.removeFrom(4)
// linked1.removeDuplicated()
//  console.log(linked1.toString());
 console.log(linked.toString());
 console.log(linked.kFromEnd(0));
//  console.log(linked2.zipLiked(linked1,linked));

//  console.log(linked2.reverse(linked1)); 
// console.log(linked1.reverse());
//  console.log(linked1.toString());
// console.log(linked1.plindrome());