

let arr3 = [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];

arr3.forEach(subArray => {
    subArray.forEach(num => {
    if (num % 2 !== 0) {
        console.log(num);
    }
    });
});


let suma = 0;

arr3.forEach(subArray => {
    subArray.forEach(num => {
    suma += num;
    });
});

console.log("La suma total es:", suma);
