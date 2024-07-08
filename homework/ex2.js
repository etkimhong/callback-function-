let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function process(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

let isEvent = (num) => {
    return num % 2 == 0;
}

console.log(process(arr, isEvent));


// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// function process(arr, callback){
//     return arr.filter(callback);
// }
// let isevent =(arr)=>{
//     return arr % 2 == 0;
// }
// console.log(process(arr,isevent));