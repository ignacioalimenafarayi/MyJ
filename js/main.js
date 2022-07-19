

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    let formulario = e.target;
    console.log(formulario.children [0].value);
    console.log(formulario.children [1].value)
}

class producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}

let productos = [
    new producto (1, "kitkat", 120, "chocolates"),
    new producto (2, "cardbury", 325, "chocolates"),
    new producto (3, "chocolinas", 120, "galletitas"),
    new producto (4, "mana", 110, "galletitas"),
    new producto (5, "melitas", 80, "galletitas"),
    new producto (6, "fanta", 180, "bebidas"),
    new producto (7, "sprite", 180, "bebidas"),
    new producto (8, "fresh", 100, "bebidas"),
    new producto (9, "queso untable", 120, "otros"),
    new producto (10, "yogurt con cereal" , 150, "otros"),
];

let categorias = ["chocolates", "galletitas", "bebidas", "otros"];

let carro = [];

let categoria = "";

while (categoria != "esc" && categoria != null) {
    let aux = categorias.join(",");
    categoria = prompt(
    'ingrese una categoria o ingrese "esc": \n(' + aux + ')'
    );
    if (categoria != "esc" && categoria != null) {
    let filtradoCategoria = productos.filter(
        (item) => (item.categoria == categoria)
    );
    
    let cartel = "";
    for (let i = 0; i < filtradoCategoria.length; i++) {
            cartel+=
        " id: "
            + filtradoCategoria[i].id +
            " precio: " +
            filtradoCategoria[i].precio +
            " " +
            " producto: " +
            filtradoCategoria[i].nombre +
            "\n";
        }
        let idSeleccionado = parseInt(
            prompt(
                    "seleccione id del producto que quiere comprar. Luego escribe esc y llena el formulario con tu nombre y email \n" + cartel
                    )
        );
        let carro = filtradoCategoria.find(
                (item) => item.id == idSeleccionado
            );
            console.log(carro);
    }
}





