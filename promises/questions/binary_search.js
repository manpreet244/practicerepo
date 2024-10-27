binarySearch([1,2,3,4,6] ,6);

function binarySearch(arr , val){
    let low = 0;
    let high = arr.length - 1;
    while(low <= high){
        let mid =Math.floor((start+end) / 2)
        if(arr[mid] == val){
            return mid;
        }else if(arr[mid] > val){
            start = mid+1;
        }else{
            end = mid-1;
        }
    }
}