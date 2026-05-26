function binary(arr,target){
    let left = 0,right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]==target){
            return mid;
        }
        if(target<arr[mid]){
            right = mid-1;
        }
        if(target>arr[mid]){
            left = mid+1;
        }
    }
    return -1;
}



function firstOcc(arr,target){
    let left = 0,right = arr.length-1;
    let ans = -1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);

        if(arr[mid]===target){
            ans = mid;
            right = mid-1;
        }else if(target<arr[mid]){
            right = mid-1;
        }else{
            left = mid+1;
        }
    }return ans;
}



function lastOcc(arr,target){
    let left = 0,right = arr.length-1;
    let ans = -1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);

        if(arr[mid]===target){
            ans = mid;
            left = mid+1;
        }else if(target<arr[mid]){
            right = mid-1;
        }else{
            left = mid+1;
        }
    }return ans;
}

let arr = [3,4,5,5,6]
console.log(firstOcc(arr,5));
