const newMedicoUrl = 'http://mintic2022-ciclo3-grupo53-e4.herokuapp.com/newMedico';
//const newPacienteUrl = 'http://127.0.0.1:8000/newMedico';

function collectData(evt){
    evt.preventDefault();
    const id = document.registro.id.value;
    const nombres = document.registro.nombres.value;
    const apellidos = document.registro.apellidos.value;
    //const fechaNacimiento = document.registro.fechaNacimiento.value;
    const genero = document.registro.genero.value;
    //const direccion = document.registro.direccion.value;
    //const longitud = document.registro.longitud.value;
    //const latitud = document.registro.latitud.value;
    const telefono = document.registro.telefono.value;
    const registroMedico = document.registro.registroMedico.value;
    const especialidad = document.registro.especialidad.value;
    const idPaciente = document.registro.idPaciente.value

    const medico = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        genero: genero,
        telefono: telefono,
        registroMedico: registroMedico,
        especialidad: especialidad,
        pacienteID: idPaciente
    }

    console.log(medico);

    // alert(
    //     `Usuario creado con:
    //     ${paciente.id}, ${paciente.nombres}, ${paciente.apellidos}`
    // );

    const dataToSend = JSON.stringify(medico);
    sendData(dataToSend);
}


function sendData (data){
    fetch(newMedicoUrl, 
        {
            method: "POST",
            headers:{
                "Content-Type": "text/json"
            },
            body: data
        })


      .then(response => {
        if (response.ok)
          return response.text()
        else
          throw new Error(response.status);
      })
      .then(data => {
        console.log(data);
        handleSuccess();
      })
      .catch(err => {
        console.error("ERROR: ", err.message);
        handleError();
      });
  }

  function handleSuccess(){
    document.getElementById("formulario").remove();
    const messeage = document.createElement("p");
    messeage.innerHTML = "Medico Creado de manera exitosa.";
    const info = document.getElementById("principal");
    info.appendChild(messeage);
  }

  function handleError() {
    document.getElementById("principal").remove();
    const messeage = document.createElement("p");
    messeage.innerHTML = "Medico no pudo ser creado.";
    const info = document.getElementById("principal");
    info.appendChild(messeage);
  }
/*-----------------------------------------------------------------------------*/
  document.registro.addEventListener('submit', collectData);