class hashTable{
    constructor(size=10){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let ch of key){
            total+=ch.charCodeAt(0);
        }
        return total%this.size;
    }

    set(key,val){
        let index = this.hash(key);
        if(!this.table[index]){
            this.table[index] = [];
        }
        for(let pair of this.table[index]){
            if(pair[0]==key){
                pair[1] = val;
                return;
            }
        }
        this.table[index].push([key,val])
    }



    get(key){
        let index = this.hash(key);
        for(let pair of this.table[index]){
            if(pair[0]==key){
                return pair[1];
            }
        }return null
    }


    remove(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(!bucket) return null;
        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]==key){
                bucket.splice(i,1);
            }
        }
        return null;
    }
}

let ht = new hashTable();
ht.setWithProb('abc','abhi');
ht.setWithProb('bca',21);
console.log(ht.get('age'))


