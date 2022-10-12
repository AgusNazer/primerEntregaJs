// NOTA: usar la consola para llamar a la funcion "productoNuevo", ingresar los datos que pide y aplicar un descuento (colocar valor numerico) para obtener el precio final. 




let userName = prompt("Please enter your name & enjoy our discounts!");
let userAge = parseInt( prompt("Enter your age"));
  

if(userAge < 18 ){
    alert("sorry, this site is for over 18 people")
   
   }else(userAge >= 18);{
    alert("Welcome!")
   }
    
   
   

function calcularDescuento(precio, porcentaje){
      let valorDescuento = precio * porcentaje /100;
      let precioFinal  = precio -valorDescuento;

      return precioFinal;
 }  
  
/*  let valorProducto =  calcularDescuento(20000, 15);
 console.log(valorProducto); */

//llamar a productoNuevo desde la consola.
 /* function productoNuevo (){
    let nombreProducto = prompt("choose your model");
    let precioProducto = parseFloat(prompt("how much does your shoe cost? "));
    let descuentoProducto = parseInt(prompt("discount"));

let precioFinal = calcularDescuento(precioProducto, descuentoProducto);
alert( `Your product is ${nombreProducto} and the final price is U$D ${precioFinal}`);

}
productoNuevo(); */
 

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
  //shoes.unshift ('nike metcon red and yellow');// ejemplo para agregar un elemento al array al comienzo
  console.log(shoes);
  


    for( let i = 0; i < shoes.length; i++){
       console.log("----")  
       console.log(shoes[i].nombre);
       console.log(shoes[i].model);
} 

class Producto {
  constructor (nombre, precio, talle, stock){
      this.nombre = nombre;
      this.precio = precio;
      this.talle = talle;
      this.stock = stock;
  }
}

//guardar en local storage
localStorage.setItem("shoes", JSON.stringify(shoes));
console.log(shoes);
//formato de texto plano - JSON. metodo stringify

//JSON.parse para parsear y poder traer el array o unelemento del array 

/* let listaProductos = [];

const agregarProducto = () => {
  let nombre = prompt("enter the product you want to add to the cart");
  let precio = parseInt (prompt("que precio tiene?"));
  let talle = parseInt(prompt("please enter your size"));
    if (talle >= 35 && talle <= 47 ){
      alert(" congrats! the product has been added to the cart");
    }else{
      alert("we dont have stock, sorry");
    }
  
  let productoNuevo = new Producto(nombre, precio, talle, stock);
  
  listaProductos.push(productoNuevo);
}

agregarProducto(); */  



/* botonAgregar.forEach(boton =>{
  boton.addEventListener("click", agregarCarrito);
})

function agregarCarrito(){
  alert("producto agregado");
}
 */












// guardar en localStorage
/* let mensaje = "hola";
console.log(mensaje);
localStorage.setItem("vergamota", mensaje) */

//o

let saludo = localStorage.getItem("saludo");
console.log(saludo);

//setitem es para guardar de forma temportal(sesioon storage)




