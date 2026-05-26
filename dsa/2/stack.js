class Stack{
    constructor(){
        this.items = {};
        this.top = 0;
    }

    push(x){
        this.items[this.top] = x;
        this.top++;
    }

    pop(){
        if(this.top==0) return null;
        this.top--;
        let drop = this.items[this.top];
        delete this.items[this.top];
        return drop
    }

    isEmpty(){
        return this.top===0
    }
}




class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class stackll{
    constructor(){
        this.top = null;
    }

    push(x){
        let node = new Node(x);

        node.next = this.top;
        this.top = node;
    }


    pop(){
        if(this.isEmpty()) return null;

        let drop = this.top.data;
        this.top = this.top.next;
        return drop;
    }

    peek(){
        if(this.isEmpty()) return null;
         return this.top.data
    }

    isEmpty(){
        return this.top===null
    }
}



// let sll = new stackll();
// sll.push(3)
// sll.push(2)
// sll.push(0)
// sll.push(5)
// sll.push(4)


// console.log(sll);



class SQ{
    constructor(){
        this.q1 = [];
        this.q2 = [];
    }

    push(x){
        this.q2.push(x);

        while(this.q1.length > 0){
            this.q2.push(this.q1.shift());
        }

        [this.q1, this.q2] = [this.q2, this.q1];
    }

    pop(){
        if(this.q1.length === 0) return null;
        return this.q1.shift();
    }

    peek(){
        if(this.q1.length === 0) return null;
        return this.q1[0];
    }

    isEmpty(){
        return this.q1.length === 0;
    }
}




function PrintToN(n){
    let stack = []
    while(n>0){
        stack.push(n);
        n--;
    }
    while(stack.length>0){
        console.log(stack.pop());
        
    }
}

// PrintToN(5)





function reverse(s){
    let words = s.split(' ');
    let res = [];
    for(let word of words){
        let stack = [];
        for(let ch of word){
            stack.push(ch);
        }
        let rev = '';
        while(stack.length>0){
            rev += stack.pop();
        }
        res.push(rev);
    }
    return res.join(' ');
}

console.log(reverse('hello world'));

