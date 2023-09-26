let form = document.getElementById("formulario");

form.addEventListener("submit", evento =>{
    evento.preventDefault();
    let nombre =document.getElementById("nombre").value;
    let apellido =document.getElementById("apellido").value
    let fnac=document.getElementById("fnac").value

    let datosFormulario = new FormData (form);
    console.log(datosFormulario);

  
    fetch("https://jsonplaceholder.typicode.com/users", {
    
    method: "POST",
    body: datosFormulario
})
   

.then((response) => response.json())
    
.then(()=>{
        document.getElementById("resultado").innerHTML = `Se registraron los datos en la API 
        Nombre: ${nombre} <br>
        Apellido: ${apellido} <br>
        Fecha de nacimiento: ${fnac}<br>`
    });
     })
