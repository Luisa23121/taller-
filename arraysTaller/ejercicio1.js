/* Primer taller guia arrays  */
//ejercicio1//
let arr1 = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];

for (let i = 0; i < arr1.length; i++) 
    {
    for (let j = 0; j < arr1[i].length; j++) {
    console.log(arr1[i][j]);
    }
    }  

    arr1.forEach(subArray => {
        subArray.forEach(element => {
        console.log(element);
        });
    });

