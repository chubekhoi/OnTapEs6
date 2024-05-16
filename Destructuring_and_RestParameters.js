var array = ['javascrip1','php','ruby','java'];
// var a =  array[0];
// var c =  array[1];
// var b =  array[2];
////////////////////
var [a,b,...res] = array;

console.log(a,b,res);

//////////////////////////
var course ={
 name:'javascrip',
 price:10000,
 image:'image addres',
children:{
    name:'reactJs'

}
};

var {name: parentName,children:{ name },description = 'default description'}= course;

console.log(name);
console.log(description);