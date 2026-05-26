// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }


// class liinkedList{
//     constructor(){
//         this.head = null;
//     }

//     append(value){
//         let newNode = new Node(value);

//         if(!this.head){
//             this.head = newNode;
//             return;
//         }
//         let curr = this.head;
//         while(curr.next){
//             curr=curr.next;
//         }
//         curr.next = newNode;
//     }

//     prepend(value){
//         let newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     delete(value){
//         if(this.head.value===value){
//             this.head = this.head.next;
//             return;
//         }
//         let curr = this.head;
//         while(curr.next){
//             if(curr.next.value==value){
//                 curr.next = curr.next.next;
//                 return;
//             }
//             curr = curr.next;
//         }
//     }

//     search(value){
//         if(!this.head) return false;
//         let curr = this.head;
//         while(curr.next){
//             if(curr.next.value===value){
//                 return true;
//             }
//             curr = curr.next;
//         }
//         return false
//     }

//     reverse(){
//         let prev = null;
//         let curr = this.head;
//         while(curr){
//             let next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         }
//         this.head = prev;
//     }

//     print(){
//         let curr = this.head;
//         while(curr){
//             console.log(curr.value);
//             curr = curr.next;
            
//         }
//     }
// }




// // let ll = new liinkedList();
// // ll.append(30)
// // ll.append(35)
// // ll.append(2)
// // ll.append(1);
// // ll.prepend(0)
// // ll.reverse()
// // ll.print()







// class dNode{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }


// class doublyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }

//     append(value){
//         let node = new dNode(value);
//         if(!this.head){
//             this.head = this.tail = node;
//             return;
//         }

//         this.tail.next = node;
//         node.prev = this.tail;
//         this.tail = node;
//     }

//     prepend(value){
//         let node = new dNode(value);
//         if(!this.head){
//             this.head = this.tail = node;
//             return;
//         }
//         node.next = this.head;
//         this.head.prev = node;
//         this.head = node;
//     }

//     reversep(){
//         let curr = this.tail;
//         while(curr){
//             console.log(curr.value);
//             curr = curr.prev;
//         }
//     }


//     print(){
//         let curr = this.head;
//         while(curr){
//             console.log(curr.value);
//             curr = curr.next;
//         }
//     }
// }


// let l = new doublyLinkedList();
// l.append(9)
// l.append(7)
// l.prepend(0)
// l.reversep()







// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }


// class LL{
//     constructor(){
//         this.head = null
//     }

//     append(x){
//         let node = new Node(x);
//         if(!this.head){
//             this.head = node;
//             return;
//         }

//         let curr = this.head;
//         while(curr.next){
//             curr = curr.next;
//         }
//         curr.next = node;
//     }


//     prepend(x){
//         let node = new Node(x);
//         node.next = this.head;
//         this.head = node;
//     }

//     delete(x){
//         if(!this.head) return null;
//         if(this.head.data===x){
//             this.head = this.head.next;
//             return;
//         }

//         let curr = this.head;
//         while(curr.next){
//             if(curr.next.data===x){
//                 curr.next = curr.next.next;
//                 return;
//             }
//             curr = curr.next;
//         }
//     }


//     reverse(){
//         if(!this.head) return null;

//         let curr = this.head;
//         let prev = null;
//         while(curr){
//             let next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         }
//         this.head = prev;
//     }

//     display(){
//         let curr = this.head;
//         while(curr){
//             console.log(curr.data)

//             curr = curr.next;
//         }
//     }
// }



// let ll = new LL();
// ll.append(1)
// ll.append(2)
// ll.append(3)
// ll.append(4)
// ll.prepend(0);

// ll.reverse()

// ll.display()





// class DNode{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DLL{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }


//     append(x){
//         let node = new DNode(x);
//         if(!this.head){
//             this.head = this.tail = node;
//             return;
//         }

//         this.tail.next = node;
//         node.prev = this.tail;
//         this.tail = node;
//     }


//     prepend(x){
//         let node = new DNode(x)
//         if(!this.head){
//             this.head = this.tail = node;
//             return;
//         }

//         node.next = this.head;
//         this.head.prev = node;
//         this.head = node;
//     }


//     display(){
//         let curr = this.head;
//         while(curr){
//             console.log(curr.data);
//             curr = curr.next
//         }
//     }
// }



// let dll = new DLL();
// dll.append(1)
// dll.append(2)
// dll.append(3)
// dll.prepend(3)
// dll.display()