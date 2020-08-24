// // function sayHello(name, age) {
// //     console.log('hello!', name, "you have", age , "years of age");
// // }

// // sayHello('nicolas', 15);


// // function hello(name,age,male){
// //     console.log('hello!',age,'year',male)
// // }

// // hello('kimyoungwoo',27,'man');


// // function sayHello(name, age) {
// //     return `hello ${name} you are ${age} years old`;
// // }

// // const greetNicolas = sayHello('nicolas', 15);





// // const calculator = {
// //    plus: function(a, b){
// //        return a + b;
// //    },
// //    minus: function(a, b){
// //        return a - b;
// //    },
// //    divide: function(a, b){
// //        return a / b;
// //    },
// //    squareroot: function(a, b){
// //        return a**b;
// //    },
// //    values: function(a, b){
// //        return a%b
// //    }


// // }

// // // console.log(greetNicolas)
// // const plus = calculator.plus(10, 5)
// // const minus = calculator.minus(10, 5)
// // const divide = calculator.divide(10, 5)
// // const squareroot = calculator.squareroot(10, 5)
// // const values = calculator.values(10, 5)

// // console.log(plus);
// // console.log(minus);
// // console.log(divide);
// // console.log(squareroot);
// // console.log(values);


// const title = document.querySelector("#title")

// // title.innerHTML = "Hi! From JS";
// // title.style.color = 'red';
// // document.title ='hi!';
// function handleClick(){
//     // console.log('i have resize')
//    title.style.color = 'blue';
// }
// title.addEventListener('click', handleClick)

// if(10 === 5){
//     console.log('hi')
// }else{
//     console.log("ho!")
// }

const title = document.querySelector("#title")
// const COLOR1 = "red";
// const COLOR2 = "blue";
// function handleClick(){
//    const color3 = title.style.color;
//    if(color3 === COLOR1){
//         title.style.color = COLOR2
//         console.dir(color3)
//    }else{
//         title.style.color = COLOR1
//         console.log(color3)
//    }
// }

const CLICKED_CLASS = "clickd";

function handleClick(){
     // const hasClass = title.classList.contains(CLICKED_CLASS)
     // if(!hasClass) {
     //      title.classList.add(CLICKED_CLASS);
     // } else {
     //      title.classList.remove(CLICKED_CLASS);
     // }

     title.classList.toggle(CLICKED_CLASS)
}

function init() {
//     title.style.color = COLOR1;
    title.addEventListener('click', handleClick)
}

init();


