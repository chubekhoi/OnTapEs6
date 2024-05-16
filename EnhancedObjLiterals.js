//1.Định nghĩa key:value cho obj gắn ngọn hơn
//2.Định ngĩa method cho obj
//3.Định nghĩa key cho obj dưới dạng biến
var name = "javascrip";
var price  = 1000;
var course={
    name,
    price,
    getName () {
        return this.name
    },
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
