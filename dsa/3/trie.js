class TrieNode{
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();

    }

    insert(word){
        let node = this.root;
        for(let ch of word){
            if(!node.children[ch]){
                node.children[ch] = new TrieNode();
            }
            node = node.children[ch]
        }
        node.isEnd = true;
    }

    search(word){
        let node = this.root;
        for(let ch of word){
            if(!node.children[ch]){
                return false;
            }
            node = node.children
        }
        return node.isEnd;
    }



    autocomplete(prefix){
        let node = this.root;
        for(let ch of prefix){
            if(!node.children[ch]){
                return [];
            }
            node = node.children[ch];
        }
        let result = [];
        this.collect(node,prefix,result);
        return result;
    }

    collect(node,prefix,result){
        if(node.isEnd){
            result.push(prefix);
        }

        for(let ch in node.children){
            this.collect(node.children[ch],prefix+ch,result);
        }
    }
}




let t = new Trie();
t.insert('abhi')
t.insert('abhijith')
t.insert('abhinand')
console.log(t.autocomplete('abhi'))