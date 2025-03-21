//ejercicio2// 
let arr2 = [
    [ ["%", 7, true, "#"], ["&", 55, false, "="] ],
    [ [false, 0, 99, "?"], [true, 1000, "@", "¡"] ],
    [ [44, 55, 66, 77], [1, 2, 3, 4] ]
];

for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2[i].length; j++) {
        for (let k = 0; k < arr2[i][j].length; k++) {
        console.log(arr2[i][j][k]);
        }
    }
    }

    
arr2.forEach(subArray => {
    subArray.forEach(innerArray => {
        innerArray.forEach(element => {
        console.log(element);
        });
    });
    });