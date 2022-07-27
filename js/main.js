let productos = [
    {id: 101, nombre: "kitkat", precio: 120},
    {id: 102, nombre: "cardbury", precio: 325},
    {id: 103, nombre: "chocolinas", precio: 120},
    {id: 104, nombre: "mana", precio: 110},
    {id: 105, nombre: "melitas", precio: 80},
    {id: 106, nombre: "fanta", precio: 180},
    {id: 107, nombre: "sprite", precio: 180},
    {id: 108, nombre: "fresh", precio: 100},
    {id: 109, nombre: "queso untable", precio: 120},
    {id: 110, nombre: "yogurt con cereal", precio: 150},
];

let aux = localStorage.getItem("productosEnCarro");

let productosEnCarro;

if (!aux) {
    productosEnCarro = [];
}else {
    productosEnCarro = JSON.parse(aux);
    listadoProductosEnCarro();
}



function listadoProductos() {
    let aux = '';
    for (let i = 0; i < productos.length; i++) {
        aux = aux +  `<div onclick= "meterAlCarro({id: ${productos[i].id}, nombre: '${productos[i].nombre}', precio: ${productos[i].precio}})" style="cursor: pointer;border: 1px solid black; ">
                    <h3>${productos[i].nombre}</h3>
                    <p>${productos[i].precio}</p>
                    <p> id: ${productos[i].id}</p>
                    </div> `;
    }
    document.getElementById('div-productos').innerHTML = aux;
}



listadoProductos();

//-----CARRO-----//

function meterAlCarro (objetoProducto){
    productosEnCarro.push(objetoProducto);

    localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro));
    listadoProductosEnCarro();
}

function BorrarDelCarro (id) {
    productosEnCarro.splice(id, 1);

    localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro));
    listadoProductosEnCarro();
}


function listadoProductosEnCarro() {
    let aux = '';
    for (let i = 0; i < productosEnCarro.length; i++) {
        aux = aux + `<div style ="border: 1px solid green;">
                        <h3>${productosEnCarro[i].nombre}</h3>
                        <p>${productosEnCarro[i].precio}</p>
                        <p> id: ${productosEnCarro[i].id}</p>
                        <p onclick= "BorrarDelCarro(${i})" style = "cursor: pointer;"><button>BORRAR DEL CARRO</button></p>
                    </div> `;
    }
    document.getElementById('div-carrito').innerHTML = aux;
}

//-----TERMINA CARRO---///

//let miFormulario = document.getElementById("formulario");
//miFormulario.addEventListener("submit", validarFormulario);

//function validarFormulario(e) {
    //e.preventDefault();
    //let formulario = e.target;
    //console.log(formulario.children [0].value);
    //console.log(formulario.children [1].value)
//}

//class producto {
    //constructor(id, nombre, precio, categoria) {
        //this.id = id;
        //this.nombre = nombre;
        //this.precio = precio;
        //this.categoria = categoria;
    //}
//}

//let productos = [
    //new producto (1, "kitkat", 120, "chocolates"),
    ///new producto (2, "cardbury", 325, "chocolates"),
    //new producto (3, "chocolinas", 120, "galletitas"),
    //new producto (4, "mana", 110, "galletitas"),
    //new producto (5, "melitas", 80, "galletitas"),
    //new producto (6, "fanta", 180, "bebidas"),
    //new producto (7, "sprite", 180, "bebidas"),
    //new producto (8, "fresh", 100, "bebidas"),
    //new producto (9, "queso untable", 120, "otros"),
    ///new producto (10, "yogurt con cereal" , 150, "otros"),
//];

//let categorias = ["chocolates", "galletitas", "bebidas", "otros"];

//let carro = [];

//let categoria = "";

//while (categoria != "esc" && categoria != null) {
    //let aux = categorias.join(",");
    //categoria = prompt(
    //'ingrese una categoria o ingrese "esc": \n(' + aux + ')'
    //);
    //if (categoria != "esc" && categoria != null) {
    //let filtradoCategoria = productos.filter(
        //(item) => (item.categoria == categoria)
    //);
    
    //let cartel = "";
    //for (let i = 0; i < filtradoCategoria.length; i++) {
            //cartel+=
        //" id: "
            //+ filtradoCategoria[i].id +
            //" precio: " +
            //filtradoCategoria[i].precio +
            //" " +
            //" producto: " +
            //filtradoCategoria[i].nombre +
            //"\n";
        //}
        //let idSeleccionado = parseInt(
            //prompt(
                    //"seleccione id del producto que quiere comprar. Luego escribe esc y llena el formulario con tu nombre y email \n" + cartel
                    //)
        //);
        //let carro = filtradoCategoria.find(
                //(item) => item.id == idSeleccionado
            //);
            //console.log(carro);
    //}
//}





