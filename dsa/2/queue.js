class Queue{
    constructor(){
        this.queue = {}
        this.front = 0;
        this.rear = 0;
    }

    enqueue(x){
        this.queue[this.rear] = x;
        this.rear++;
    }

    dequeue(){
        if(this.isEmpty()) return null;
        let drop = this.queue[this.front];
        delete this.queue[this.front]
        this.front++;
        return drop;
    }


    peek(){
        return this.queue[this.front];
    }

    isEmpty(){
        if(this.front===this.rear){
            return true;
        }
        return false;
    }
    
}






class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class qll{
    constructor(){
        this.front = null;
        this.rear = null;
    }


    enqueue(x){
        let node = new Node(x);
        if(this.rear == null){
            this.front = this.rear = node;
            return;
        }
        this.rear.next = node;
        this.rear = node;
    }

    dequeue(){
        if(this.front==null){
            return null;
        }
        let drop = this.front.data;
        this.front = this.front.next;
        if(this.front==null){
            this.rear=null;
        }
        return drop;
    }

    peek(){
        if(this.isEmpty()) return null;
        return this.front.data;
    }

    isEmpty(){
        return this.front===null
    }
}





class qs{
    constructor(){
        this.s1 = [];
        this.s2 = [];
    }


    enqueue(x){
        this.s1.push(x);
    }

    dequeue(){
        if(this.s1.length==0 && this.s2.length==0) return null;
        if(this.s2.length===0){
            while(this.s1.length>0){
                this.s2.push(this.s1.pop());
            }
            
        }
        return this.s2.pop();
    }
}





let q = new qll();
q.enqueue(4)
q.enqueue(5)
q.enqueue(2)
q.enqueue(3)

console.log(q)