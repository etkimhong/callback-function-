let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
function process(arr, callback){
    return arr.filter(callback);
}
let isevent =(arr)=>{
    return arr % 2 == 0;
}
console.log(process(arr,isevent));