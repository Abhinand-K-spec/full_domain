function fib(n){
    if(n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}



function print(n){
    if(n==0) return;
    print(n-1)
    console.log(n);
}


function rev(s){
    if(s.length<=1) return s;
    return s.slice(1) + s[0]
}

function fact(n){
    if(n<=1) return 1;
    return n * fact(n-1)
}


function sum(n){
    if(n==0) return 0;
    return n+=sum(n-1);
}

function isPal(s,left=0,right=s.length-1){
    if(left>=right) return true;
    if(s[left]!==s[right]) return false;
    return isPal(s,left+1,right-1);

}

console.log(isPal('magm'));



// function rev(n,r=0){
//     if(n===0) return r;
//     let digit = n%10;
//     return rev(Math.floor(n/10),r*10+digit);
// }

// console.log(rev(234))



// function rev(s){
//     if(s==='') return '';
//     return rev(s.slice(1))+s[0]
// }

// console.log(rev('hioo'))


// function print(n){
//     if(n==0) return;
//     print(n-1)
//     console.log(n);
// }

// print(5);



// function facto(n){
//     if(n<=1) return n;
//     return n*facto(n-1)
// }

// console.log(facto(5))



// function summ(n,sum=0){
//     if(n===0) return sum;
//     return summ(n-1,sum+=n);
// }

// console.log(summ(6))



// let arr = [3,2,5,4,1,8];

// function maxx(arr,max=0){
//     if(arr.length==0) return max;
//     if(arr[0]>max){
//         max=arr[0]
//     }
//     return maxx(arr.slice(1),max)
// }

// console.log(maxx(arr))




// let s = 'madfbdam';

// function pal(s,left=0,right=s.length-1){
//     if(left>=right) return true;
//     if(s[left]!==s[right]) return false;
//     return pal(s,left+1,right-1);
// }

// console.log(pal(s))




// function occ(arr,n,oc=0){
//     if(arr.length===0) return oc;
//     if(arr[0]===n){
//         oc++;
//     }
//     return occ(arr.slice(1),n,oc)
// }

// let arr = [2,2,2,3,5]
// let n =2
// console.log(occ(arr,n))




// function filter(s,ch,f=''){
//     if(s=='') return f;
//     if(s[0]!==ch){
//         f+=s[0];
//     }
//     return filter(s.slice(1),ch,f);
// }
// let s = 'hello';
// let ch = 'l'
// console.log(filter(s,ch))



// function rev(arr,left=0,right=arr.length-1){
//     if(left>=right) return arr;
//     [arr[left],arr[right]] = [arr[right],arr[left]];
//     return rev(arr,left+1,right-1)
// }
// let arr = [1,2,3,4]
// console.log(rev(arr))



// let s = 'abc';

// function su(s,index = 0,curr=''){
//     if(index===s.length){
//         console.log(curr)
//         return;
//     } 
    
//     su(s,index+1,curr+s[index]);
//     su(s,index+1,curr);
// }

// su(s)



// function genSub(arr,i=0,curr=[]){
//     if(i===arr.length){
//         console.log(curr);
//         return;
//     }
//     curr.push(arr[i])
//     genSub(arr,i+1,curr);
//     curr.pop();
//     genSub(arr,i+1,curr);
// }

// let arr = [1,2,3]
// genSub(arr)



// function sumSub(arr,i=0,sum=0){
//     if(i===arr.length){
//         console.log(sum);
//         return;
//     }
    
//     sumSub(arr,i+1,sum+arr[i]);

//     sumSub(arr,i+1,sum);
// }

// let arr = [1,2,3];
// sumSub(arr)





