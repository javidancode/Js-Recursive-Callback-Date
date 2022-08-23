// function sum(n) {
//     let result = 0;
//     for (let i = 0; i <= n; i++) {

//         result += i;

//     }
//     return result;
// }

// console.log(sum(4));



// function getSum(n) {
//     if (n == 1) {
//         return n;
//     }else{
//         return n + getSum(n-1)
//     }
// }

// console.log(getSum(3));


// function getFactorial(n) {
//     if (n == 1) {
//         return n;
//     }else{
//         return n * getFactorial(n-1)
//     }
// }

// console.log(getFactorial(3));


// let students = ["Orxan","Ayxan","Togrul"]

// students.forEach((elem,index) => {
//     console.log(elem + "-" + index);
// });

// for (let item of students) {
//     console.log(item);
// }


// let users = [{
//     email : "cavidan@code.edu.az",
//     password : "salam12345",
// },
// {
//     email : "cavid@code.edu.az",
//     password : "salam12345",
// },
// {
//     email : "seid@code.edu.az",
//     password : "salam12345",
// }];

// for (const item of users) {
//     for (let key in item) {
//         console.log(key);
//     }
// }


// let book = {
//     name : "Xosrov",
//     author : "Nizami",
//     pageCount : 2000
// }

// for (let key in book) {
//     console.log(book[key]);
// }



// let students = ["Orxan","Ayxan","Togrul"]

// function getStudents(arr) {
//     for (let item of arr) {
//         console.log(item);
//     }
// }

// getStudents(students)


// function evenNum(n){
//     return n % 2 == 0;
// }

// function oddNum(n){
//     return n % 2 != 0;
// }

// function thanThereNum(n){
//     return n >= 3;
// }

// let evenNum = (n) => n % 2 == 0;
// let oddNum = (n) =>n % 2 != 0;
// let thanThereNum = (n) => n >= 3;

// function numsByContidions(arr,callback) {
//     let sum = 0;

//     for (let item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// console.log(numsByContidions([1,2,3,4,5,6,7],n % 2 == 0));
// console.log(numsByContidions([1,2,3,4,5,6,7],n % 2 != 0));


// function numsByContidions(arr,callback,callback2) {
//     let sum = 0;

//     for (let item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }

//     for (let item of arr) {
//         if (callback2(item)) {
//             sum += item;
//         }
//     }

//     return `Sum even ${sumEven} - Sum odd ${sumOdd}`;

// }


// function sumOddNums(arr,callback) {
//     let sum = 0;

//     for (let item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// console.log(sumOddNums([1,2,3,4,5,6,7],oddNum));

// function sumThanThere(arr,callback) {
//     let sum = 0;

//     for (let item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// console.log(sumThanThere([1,2,3,4,5,6,7],thanThereNum));


// let numbers = [1, 5, 2, 7, 9, 15, 14, 27, 39];

// let filteredNumbers = numbers.filter(m => m % 2 == 1);

// for (let item of filteredNumbers) {
//     sum += item;
// }

// function sumNumbers(arr) {
//     let sum = 0;

//     for (let item of arr) {
//         sum += item;
//     }

//     return sum;
// }

// console.log(sumNumbers(numbers));
// console.log(sum);
// console.log(filteredNumbers);
// console.log(numbers);



// let numbers = [2, 3, 4, 5, 6];

// console.log(numbers);

// numbers.forEach((item,index) => {
//     numbers[index] = item * 2;
// });

// console.log(numbers);

// let result = numbers.map(m=>m*100);
// console.log(result);

// console.log(numbers);



// let users = [
//     { name: "Ayxan", surname: "Nabatov", age: 23 },
//     { name: "Orxan", surname: "Akberov", age: 26 },
//     { name: "Fidan", surname: "Merdanli", age: 17 },
// ];

// let date = new Date();

// console.log(date);

// users.map(m=>{
//     return {
//         fullname: `${m.name} ${m.surname}`,
//         yearOfBirth: date.getFullYear() - m.age
//     }
// })

// console.log(result);