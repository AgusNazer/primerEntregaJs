// NOTA: usar la consola para llamar a la funcion "productoNuevo", ingresar los datos que pide y aplicar un descuento (colocar valor numerico) para obtener el precio final. 

let userName = prompt("welcome! please enter your name & enjoy our discounts!");
let userAge = parseInt( prompt("Enter your age"));
  

if(userAge < 18 ){
    alert("sorry, this site is for over 18 people")
   }else(userAge >= 18);
   

function calcularDescuento(precio, porcentaje){
      let valorDescuento = precio * porcentaje /100;
      let precioFinal  = precio -valorDescuento;

      return precioFinal;
 }  
  
/*  let valorProducto =  calcularDescuento(20000, 15);
 console.log(valorProducto); */

//llamar a productoNuevo desde la consola.
function productoNuevo (){
    let nombreProducto = prompt("choose your model");
    let precioProducto = parseFloat(prompt("how much does your shoe cost? "));
    let descuentoProducto = parseInt(prompt("discount"));

let precioFinal = calcularDescuento(precioProducto, descuentoProducto);
let producto = console.log( `Your product is ${nombreProducto} and the final price is ${precioFinal}`);
return producto
}


/*He agregado un array, no era parte de la consigna pero encontre esta forma para mostrar por consola
la lista de las zapatillas utilizando un ciclo, en este caso for
*/
 const shoes = [
{nombre: "nike metcon grey", model: 1},
{nombre: "nike metcon white-brown", model: 2},
{nombre: "nike metcon black classic", model: 3},
{nombre: "nike metcon white-rose", model: 4},
{nombre: "nike metcon black-brown", model: 5},
{nombre: "nike metcon black-rose", model: 6},
{nombre: "nike metcon grey-yellow", model: 7},
{nombre: "nike metcon black-white", model: 8},
{nombre: "nike metcon multicolor", model: 9},
{nombre: "nike metcon white-violet", model: 10},
{nombre: "nike metcon black-grey", model: 11},
{nombre: "nike metcon orange", model: 12},
];
   

    for( let i = 0; i < shoes.length; i++){
       console.log("----")  
       console.log(shoes[i].nombre);
       console.log(shoes[i].model);
} 
 