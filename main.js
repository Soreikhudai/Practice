//-------------------call-------------------------

// var obj={num: 2};
// var addToThis = function(a){
//   return this.num + a;
// };

// console.log(addToThis.call(obj, 5));



//-------------------apply-----------------------------

// var obj={num: 2};
// var addToThis = function(a, b, c){
//   return this.num + a + b + c;
// };

// //console.log(addToThis.call(obj, 5, 2, 2));
// var arr=[2,2,3];
// console.log(addToThis.apply(obj, arr))



// -------apply for 2 obj---------------------

// var obj={num: 2};
// var obj2={num: 5};

// var addToThis = function(a, b, c){
//   return this.num + a + b + c;
// };
// var arr=[2,2,5];
// console.log(addToThis.apply(obj, arr))
// console.log(addToThis.apply(obj2, arr))




//--------------------bind--------------------------

// var obj={num: 2};

// var addToThis = function(a, b, c){
//   return this.num + a + b + c;
// };
// var bound = addToThis.bind(obj);
// console.log(bound(1,2,3));

//Create a new object called Student with age 20 , write a function which
// prints the age of the student from the student object.

// let multiply = function(x, y){
//     console.log(x*y);
// }


//-------------------function curring-------------

let multiply = function(x){
    return function (y){
    console.log(x*y);
    }
}
let multiplyByTwo=multiply(2);
multiplyByTwo(3)
