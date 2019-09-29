var num = [ 0,1,2,3,4,5,6];
undefined
num.push(7);
8
console.log(num);
VM1039:1 (8) [0, 1, 2, 3, 4, 5, 6, 7]
undefined
num.pop();
7
console.log(num);
VM1112:1 (7) [0, 1, 2, 3, 4, 5, 6]
delete num[1]
(7) [0, empty, 2, 3, 4, 5, 6]