// let arr = [1,2,3,4];
// function processArr(arr, callback){
//     return arr.map(callback);
// }
// function kare(arr){
//     return arr*arr;
// }
// console.log(processArr(arr,kare));


let arr = [1,2,3,4,5,6];
function procesArr(arr, callback){
    let result = [];
    for(let i=0;i<arr.length;i++){
        result.push(callback(arr[i]));
    }
    return result;
}
function kare(num){
    return num*num;
}
console.log(procesArr(arr, kare));

