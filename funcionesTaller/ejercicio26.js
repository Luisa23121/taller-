/*Una función que reciba dos números y retorne el mayor si lo hay */


function encontrarMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Los números son iguales";
    }
}


console.log(encontrarMayor(10, 5));  
console.log(encontrarMayor(3, 8));   
console.log(encontrarMayor(7, 7));   