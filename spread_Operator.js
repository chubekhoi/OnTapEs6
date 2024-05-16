var array1 =['javascrip','php','ruby'];
var array2 =['ReactJS','dart'];
var array3 =[...array1,...array2];
console.log(array3);
///////////////////////////////
var obj1 = {
    name:'javascrip',
}
var obj2 = {
    price:10000,
}
var obj3 = {
    ...obj1,
    ...obj2,
}
console.log(obj3);
////////////////////////////
var trangchu ={
    api:'http//trang-chu',
    other:'other'

};
var trangbaitap ={
    ...trangchu,
    api:'http//trang-bai-tap',
 

};
console.log(trangbaitap);
/////////////////////////
var array =['javascrip','php','ruby'];
function logger(...res) {
    console.log(res);
    for (let i = 0; i < res.length; i++) {
        console.log(res[i]);
        
    }
}
logger(...array)