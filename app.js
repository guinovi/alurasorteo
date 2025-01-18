// Declaraciones
const amigoInput = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const arrayAmigos = [];

//Funcion Número Random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Función para agregar amigos
function agregarAmigo() {
  //Validacion Input
  if (amigoInput.value === "") {
    alert("Ingrese un nombre");
    return;
  }
  // Agregar amigo al array
  arrayAmigos.push(amigoInput.value);
  //Agregar a lista
  actualizarLista();
}

// Actualizar lista
function actualizarLista() {
  // Limpiar lista
  listaAmigos.innerHTML = "";
  // Agregar a la lista
  for (let index = 0; index < arrayAmigos.length; index++) {
    const li = document.createElement("li");
    li.textContent = arrayAmigos[index];
    listaAmigos.appendChild(li);
  }
}


//Funcion para sortear amigo
function sortearAmigo() {
  if (arrayAmigos.length < 1) return alert("No hay amigos en la lista");
  const ganador = arrayAmigos[getRandomInt(arrayAmigos.length)];
  // Limpiar lista
  listaAmigos.innerHTML = "";
  // Agregar ganador
  resultado.innerHTML = ganador;
}
