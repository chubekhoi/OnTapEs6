const logger =function (log) {
    console.log(log)
};
logger("hello word");
// ham binh thuong dung de log 
const logger2 = (log2) => {
    console.log(log2)
};
logger2("hello word 2");
//ham su dung arrow function

const sum = (a,b) => a+b;
console.log(sum(1,2));
/////////////////////////////
const sumObj = (a,b) => ({a,b});
console.log(sumObj(3,4));
/////////////////////////////
const logger3 = log3 => console.log(log3);
logger3("hello word 3");
//cach run gan gon khi ham chi co 1 doi so 
const course = {
    name:"js basic!",
    getName: () => {
        return this.name;
    },

};
console.log(course.getName())