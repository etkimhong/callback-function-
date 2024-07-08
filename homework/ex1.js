let arr = [1,2,3,4];
function processArr(arr, callback){
    return arr.map(callback);
}
function kare(arr){
    return arr*arr;
}
console.log(processArr(arr,kare));