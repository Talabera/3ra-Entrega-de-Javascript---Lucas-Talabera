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
  const entregaCliente = document.getElementById("entregaCliente").value;
  const sublimacion = document.getElementById("sublimacion").checked;
  const nombreRemera = document.getElementById("nombreRemera").value;
  const numeroRemera = document.getElementById("numeroRemera").value;
  const faltante = document.getElementById("faltante").value;
  const estado = document.getElementById("estado").value;

  // Crear el objeto cliente
  const cliente = {
    numeroCliente: numeroCliente,
    nombreCliente: nombreCliente,
    telefonoCliente: telefonoCliente,
    talleRemera: talleRemera,
    talleShort: talleShort,
    entregaCliente: entregaCliente,
    sublimacion: sublimacion,
    nombreRemera: nombreRemera,
    numeroRemera: numeroRemera,
    faltante: faltante,
    estado: estado,
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
    const entregaClienteCell = row.insertCell(5);
    const sublimacionCell = row.insertCell(6);
    const nombreRemeraCell = row.insertCell(7);
    const numeroRemeraCell = row.insertCell(8);
    const faltanteCell = row.insertCell(9);
    const estadoCell = row.insertCell(10);

    numeroClienteCell.innerHTML = cliente.numeroCliente;
    nombreClienteCell.innerHTML = cliente.nombreCliente;
    telefonoClienteCell.innerHTML = cliente.telefonoCliente;
    talleRemeraCell.innerHTML = cliente.talleRemera;
    talleShortCell.innerHTML = cliente.talleShort;
    entregaClienteCell.innerHTML = cliente.entregaCliente;
    sublimacionCell.innerHTML = cliente.sublimacion ? "Sí" : "No";
    nombreRemeraCell.innerHTML = cliente.nombreRemera;
    numeroRemeraCell.innerHTML = cliente.numeroRemera;
    faltanteCell.innerHTML = cliente.faltante;
    estadoCell.innerHTML = cliente.estado;
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

