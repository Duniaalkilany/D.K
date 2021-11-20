const Node =require('./node')

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
    module.exports=append