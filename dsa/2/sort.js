let arr = [4,3,2,6,7]




function bubble(arr){
    for(let i=0;i<arr.length;i++){
        let swapped = false;
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                swapped = true;
            }
        }
        if(!swapped){
            break;

        }
    }return arr;
}










function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }return arr
}







function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if(min !== i){
            [arr[i],arr[min]] = [arr[min],arr[i]];
        }
    }return arr
}










function quickSort(arr,low=0,high=arr.length-1){
    if(low<high){
        let p = partition(arr,low,high);
        quickSort(arr,low,p-1);
        quickSort(arr,p+1,high);
    }
    return arr;
}


function partition(arr,low,high){
    let pivot = arr[high];
    let i = low-1;
    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
    return i+1
}










function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);
}

function merge(left,right){
    let res = [];
    let i = 0,j = 0;
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            res.push(left[i]);
            i++;
        }else{
            res.push(right[j]);
            j++;
        }

    }
    while(i<left.length){
        res.push(left[i]);
        i++;
    }while(j<right.length){
        res.push(right[j]);
        j++;
    }
    return res;

}






// console.log(mergeSort(arr));



