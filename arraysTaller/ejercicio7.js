let array7 = [ [50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1 , -8, -2] ];

//cambio//

array7[1][1] = "?"; 
console.log(array7);

array7[3][1] = 9; 
console.log(array7);

array7[0][0] = "¡"; 
console.log(array7);


// eliminar//   

array7[1].splice(2, 1); 
console.log(array7);

array7[0].splice(2, 1); 
console.log(array7);

array7[3].splice(2, 1); 
console.log(array7);
