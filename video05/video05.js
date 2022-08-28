// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //filter, find
// let filter = arr.filter((x, y, arr) => {
//   return y > 1;
// });

// console.log(filter);

let arr2 = [
  { name: `hoapham0`, age: 20 },
  { name: `hoapham1`, age: 20 },
  { name: `hoapham2`, age: 21 },
  { name: `hoapham3`, age: 22 },
  { name: `hoapham4`, age: 23 },
];

let filter = arr2.filter((value, index, arr2) => {
  return value.age > 22;
});

console.log(filter);
