


var name = "javascrip";
var price  = 1000;
var course={
    name,
    price,
    //1.Định nghĩa key:value cho obj gắn ngọn hơn
    getName () {
        return this.name
    },
    //2.Định ngĩa method cho obj
} ;
console.log(course.getName());
/////////////////////////////////
var fieldName = 'name';
var fieldPrice= 'price';
var course2 = {
    [fieldName]:'php basic',
    [fieldPrice]:2000000,
};
console.log(course2)
//3.Định nghĩa key cho obj dưới dạng biến