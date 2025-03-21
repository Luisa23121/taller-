/*En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no 
pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos 
mencionados y muestre si el producto paga IVA o no. Realice una versión con condicionales y otra con estructura 
switch-case. */


let producto = prompt("Introduce un producto: lentejas, crema, arroz, vino");

producto = producto.toLowerCase();

switch (producto) {
    case "lentejas":
    case "arroz":
        alert(`no paga IVA.`);
        break;
    case "vino":
    case "crema":
        alert(`paga IVA.`);
        break;
    default:
        alert(`Producto no reconocido`);
        break;
}   