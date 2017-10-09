/*冒泡排序算法*/
var examplearr=[8,94,15,88,55,76,21,39];
function sortarr(arr){
    for(i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
sortarr(examplearr);
console.log(examplearr);           //[ 8, 15, 21, 39, 55, 76, 88, 94 ]


/*选择排序*/
var sortArr = [1,23,4,56,41,6,3];

function sort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     
                minIndex = j;            
            }
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
       
    }
    return arr;
}

sort(sortArr);
console.log(sortArr);       //1, 3, 6, 4, 23, 41, 56



//插入排序
    function insertSort(arr){
        var len = arr.length;
        for(var i = 1;i<len;i++) {
            var key = arr[i];
            var j = i - 1;
            while(j >=0 && arr[j] > key) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = key;
        }
        return arr;
    }

    var exmaplearr = [12,23,655,34,676,6764];
    console.log(insertSort(exmaplearr));