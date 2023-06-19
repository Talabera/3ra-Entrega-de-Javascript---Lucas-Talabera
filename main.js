let clientes = [];

// localStorage
const storedClientes = localStorage.getItem("clientes");
if (storedClientes) {
  clientes = JSON.parse(storedClientes);
  mostrarClientes();
}

function guardarCliente(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const numeroCliente = document.getElementById("numeroCliente").value;
  const nombreCliente = document.getElementById("nombreCliente").value;
  const telefonoCliente = document.getElementById("telefonoCliente").value;
  const talleRemera = document.getElementById("talleRemera").value;
  const talleShort = document.getElementById("talleShort").value;
  // Crear el objeto cliente
  const cliente = {
    numeroCliente: numeroCliente,
    nombreCliente: nombreCliente,
    telefonoCliente: telefonoCliente,
    talleRemera: talleRemera,
    talleShort: talleShort,
  };

  // Agregar el cliente al array
  clientes.push(cliente);

  // Guardar los datos en el localStorage
  localStorage.setItem("clientes", JSON.stringify(clientes));

  // Mostrar los clientes 
  mostrarClientes();
}

function mostrarClientes() {
  const table = document.getElementById("clientesTable");

  // Limpiar la tabla antes de mostrar los clientes
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  // Agregar cada cliente a la tabla
  for (let i = 0; i < clientes.length; i++) {
    const cliente = clientes[i];

    const row = table.insertRow(i + 1);
    const numeroClienteCell = row.insertCell(0);
    const nombreClienteCell = row.insertCell(1);
    const telefonoClienteCell = row.insertCell(2);
    const talleRemeraCell = row.insertCell(3);
    const talleShortCell = row.insertCell(4);
    const accionesCell = row.insertCell(5); 
    
    numeroClienteCell.innerHTML = cliente.numeroCliente;
    nombreClienteCell.innerHTML = cliente.nombreCliente;
    telefonoClienteCell.innerHTML = cliente.telefonoCliente;
    talleRemeraCell.innerHTML = cliente.talleRemera;
    talleShortCell.innerHTML = cliente.talleShort;
    
    // botón de eliminación
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => eliminarCliente(i)); // Llama a la función eliminarCliente pasando el índice del cliente
    
    // Agregar el botón
    accionesCell.appendChild(botonEliminar);
  }
}


// llamar a la función guardarCliente
const form = document.getElementById("clienteForm");
form.addEventListener("submit", guardarCliente);

// Cargar los clientes 
window.addEventListener("load", mostrarClientes);
function filtrarClientes() {
  const filtroTalleRemera = prompt("Ingrese el talle de remera para filtrar:");

  // Filtrar los clientes
  const clientesFiltrados = clientes.filter(
    (cliente) => cliente.talleRemera === filtroTalleRemera
  );

  // Mostrar solo los clientes filtrados
  mostrarClientes(clientesFiltrados);
}

//  click al botón de filtrar
const btnFiltrar = document.getElementById("btnFiltrar");
btnFiltrar.addEventListener("click", filtrarClientes);

function eliminarCliente(index) {
  clientes.splice(index, 1); //
  localStorage.setItem("clientes", JSON.stringify(clientes)); 
  mostrarClientes(); }
