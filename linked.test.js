

// let LinkedList = require('./linked')
// let append= require('./linked')
const LinkedList=require('./linked')
const append=require('./function')

const list = new LinkedList()
describe('linkedlist methods',()=>{
    it('append',()=>{
       
    
      append(list,4)
      append(list,3)
      append(list,2)
        expect(list.head.value).toEqual(4)
        expect(list.head.next.value).toEqual(3)
    })
    // it('inser',()=>{
      
    //     list.insert(1)
    //     expect(list.head.value).toEqual(1)
    //     expect(list.head.next.value).toEqual(2)
    // })
})