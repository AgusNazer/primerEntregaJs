

//variables
const botonesComprar = document.querySelectorAll(".btn");
console.log(botonesComprar);

//para agregar la funcionalidad de click a cada boton del producto y me muestre un mensaje.
botonesComprar.forEach(boton =>{
  boton.addEventListener("click", agregarCarrito);
})
function agregarCarrito (){
  alert("Product added to your list");
  console.log("producto agregado");
}

/* class Producto {
    constructor (nombre, precio, talle, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.talle = talle;
        this.stock = stock;
    }
}

let listaProductos = [];

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

agregarProducto();   */
 
//Function para saber si hay stock

/*   comprar (cantidad);{
    if (this.stock > cantidad ){
      alert("We have stock, your order is on the way!");
    }else{
      alert("sorry we dont have stock enough");
      this.stock = stock - cantidad;
     console.log(`The current sotck after the order is  ${this.stock}`);
    }
    
}

const stockNuevo = () =>{
  let stock = prompt("Is available stock")
}  */

//DOM events
/* document.querySelectorAll("#botonAgregar").addEventListener("click", agregar)

function agregar (){
 
  alert("Producto añadido");
}

 */











//para crear un bucle para agregasr mas productos
/* while (listaProductos.length < 2) {
          agregarProducto();
} */