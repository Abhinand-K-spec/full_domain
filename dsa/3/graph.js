class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdges(v1,v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return null;
        if(!this.adjacencyList[v1].has(v2)){
            this.adjacencyList[v1].add(v2);
        }if(!this.adjacencyList[v2].has(v1)){
            this.adjacencyList[v2].add(v1)
        }
    }


    removeEdge(v1, v2){
        if(this.adjacencyList[v1]){
            this.adjacencyList[v1].delete(v2);
        }
        if(this.adjacencyList[v2]){
            this.adjacencyList[v2].delete(v1);
        }
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return;

        for(let adjVertex of this.adjacencyList[vertex]){
            this.adjacencyList[adjVertex].delete(vertex)
        }
        delete this.adjacencyList[vertex];
    }

    shortestDistance(start,end){
        let queue = [[start,0]];
        let visited = new Set([start]);

        while(queue.length>0){
            let [vertex,distance] = queue.shift();

            if(vertex===end) return distance;
            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    queue.push([neighbour,distance+1]);
                }
            }
        }return -1;
    }


    bfs(start){
        let q = [start];
        let visited = new Set([start]);

        while(q.length>0){
            let vertex = q.shift();
            console.log(vertex);
            
            for(let n of this.adjacencyList[vertex]){
                if(!visited.has(n)){
                    visited.add(n);
                    q.push(n);
                }
            }
        }
    }




    dfs(start){
        let s = [start];
        let visited  = new Set([start]);

        while(s.length>0){
            let v = s.pop();
            console.log(v);;

            for(let n of this.adjacencyList[v]){
                if(!visited.has(n)){
                    visited.add(n);
                    s.push(n);
                }
            }
            
        }
    }


    cloneGraph(){
        let clonedGraph = new Graph();

        for(let vertex in this.adjacencyList){
            clonedGraph.addVertex(vertex);
        }

        for(let vertex in this.adjacencyList){
            for(let n of this.adjacencyList[vertex]){
                if(vertex < n){
                    clonedGraph.addEdges(vertex,n);
                }
            }
        }

        return clonedGraph;
    }
}



let g = new Graph();
g.addVertex('a')
g.addVertex('b')
g.addVertex('c')
g.addVertex('d');

g.addEdges('a','b')
g.addEdges('a','c');

g.bfs('a')