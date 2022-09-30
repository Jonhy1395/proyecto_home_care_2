const getMedico = 'https://mintic2022-ciclo3-grupo53-e4.herokuapp.com/readMedicos';
//const getMedico = 'http://127.0.0.1:8000/readMedico';

var btn = document.getElementById("botonBuscarMedicos");
btn.addEventListener('click', getMedicos);
let medicos = [];

function getMedicos (){
  fetch(getMedico)
    .then(response => {
      if (response.ok)
        return response.text()
      else
        throw new Error(response.status);
    })
    .then(data => {
      console.log("Datos: " + data);
      medicos = JSON.parse(data);
      handleMedico();
    })
    .catch(err => {
      console.error("ERROR: ", err.message);
      handleError();
    });
}

function handleMedico() {
  const trs = [];
  medicos.forEach((medic) => {
    const tr = document.createElement("tr");
    tr.innerHTML =
      `<tr>
        <td>${medic.id}</td>
        <td>${medic.nombres}</td>
        <td>${medic.apellidos}</td>
        <td>${medic.genero}</td>
        <td>${medic.telefono}</td>
        <td>${medic.registroMedico}</td>
        <td>${medic.especialidad}</td>
      </tr>`;

    trs.push(tr);
  });
  const info = document.getElementById("cuerpoTabla");
  trs.forEach(tr => info.appendChild(tr));
}

function handleError() {
  //document.getElementById("cargando").remove();
  const message = document.createElement("p");
  message.innerHTML = "No se pudo cargar la información. Intente luego.";
  const info = document.getElementById("default");
  info.appendChild(message);
}