let nombre

function pedirNombre() {
    nombre = prompt('Ingrese su nombre:')
    alert('¡Hola '+nombre+', bienvenido!')
};

function seleccionarOpcion(){
    const opcion = prompt("Ingrese una opcion: \n 1: Comprar juegos \n 2: Finalizar compra")
    if(opcion == 1){
        comprarJuego()
    } else if (opcion == 2){
        alert("Ha finalizado su compra "+nombre+". \n Ha comprado "+ESV+ " Elder Scrolls V online. \n Ha comprado "+Brotato+ " Brotato. \n Ha comprado "+Broforce+" Broforce.")
    }
}


function comprarJuego(){
    const juego = parseInt(prompt("Seleccione que juego comprar \n 1: Elder Scrolls V online (Jero no lo reclamo) \n 2: Brotato \n 3: Broforce"))
    if(juego == 1){
        alert("Ha seleccionado Elder Scrolls V online")
        seleccionarCantidad(ESV)
    } else if(juego == 2){
        alert("Ha seleccionado Brotato")
        seleccionarCantidad(Brotato)
    } else if(juego == 3){
        alert("Ha seleccionado Broforce")
        seleccionarCantidad(Broforce)
    } else alert("Seleccione un juego valido")
};

function seleccionarCantidad(juego){
    let cantidad = parseInt(prompt("Seleccione la cantidad:"))
    if(cantidad >= 1){
            if(juego == ESV){
                for(let i=0; i<cantidad; i++){
                    ESV = ESV + 1
                    }
            }
            else if(juego == Brotato){
                for(let i=0; i<cantidad; i++){
                    Brotato = Brotato + 1
                    }
            }
            else if(juego == Broforce){
                for(let i=0; i<cantidad; i++){
                    Broforce = Broforce + 1
                    }
            }
        seleccionarOpcion()
    }
    else {alert("Seleccione una cantidad valida")
    seleccionarCantidad()}
}

let ESV = 0
let Brotato = 0
let Broforce = 0



pedirNombre()
seleccionarOpcion()






