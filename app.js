document.addEventListener("DOMContentLoaded", () => {
    const amigos = []; 
    const inputNombre = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    // Función para agregar amigos
    window.agregarAmigo = function () {
        const nombre = inputNombre.value.trim();
        
        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
            return;
        }
        
        amigos.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    };

    function actualizarLista() {
        listaAmigos.innerHTML = ""; 
        amigos.forEach(amigo => {
            const li = document.createElement("li");
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }

    window.sortearAmigo = function () {
        if (amigos.length < 2) {
            alert("Debe haber al menos dos amigos para sortear.");
            return;
        }
        const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</p>`;
    };
});
