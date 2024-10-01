// const arr = [323, 554, 664, 76, 35];

// const min = arr.map(num => num).reduce((min, numm) => {
//     if (numm < min) {
//         return numm;
//         return min;
//     }
// }) 

// console.log('Your min num is ' + min);

const arr = [55, 35, 75, 46, 53]

let min = arr[0];

arr.map((num) => {
    if (num < min) {
        min = num
    }
});

console.log(min)