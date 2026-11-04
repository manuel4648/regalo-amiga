
// ELEMENTOS DEL HTML
const sobre = document.getElementById("sobre");
const instruccion = document.getElementById("instruccion");
const contenedorRosas = document.getElementById("rosas");

// CONTROL DE APERTURA
let abierto = false;
let intervaloRosas = null;

// CUANDO HACEMOS CLIC EN EL SOBRE
sobre.addEventListener("click", () => {

    abierto = !abierto;

    if (abierto) {

        // Abrir el sobre
        sobre.classList.add("abierto");

        instruccion.textContent = "¡Una pequeña sorpresa para ti! 🌹";

        // Comenzar animación de rosas
        crearRosas();

        intervaloRosas = setInterval(crearRosas, 700);

    } else {

        // Cerrar el sobre
        sobre.classList.remove("abierto");

        instruccion.textContent =
            "Haz clic en el sobre para abrir tu regalo";

        // Detener generación de rosas
        clearInterval(intervaloRosas);
    }

});

// FUNCIÓN PARA CREAR ROSAS Y PÉTALOS
function crearRosas() {

    for (let i = 0; i < 3; i++) {

        const rosa = document.createElement("span");

        // Decoraciones florales
        const flores = ["🌹", "🌸", "🌺"];

        rosa.classList.add("petalo");

        rosa.textContent =
            flores[Math.floor(Math.random() * flores.length)];

        // Posición aleatoria
        rosa.style.left = Math.random() * 100 + "%";

        // Tamaño aleatorio
        rosa.style.fontSize =
            (14 + Math.random() * 15) + "px";

        // Duración de la caída
        rosa.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        contenedorRosas.appendChild(rosa);

        // Eliminar elemento después de la animación
        setTimeout(() => {
            rosa.remove();
        }, 6500);

    }

}
