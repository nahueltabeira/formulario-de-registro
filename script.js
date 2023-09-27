let form = document.getElementById("formulario");

form.addEventListener("submit", evento =>{
    evento.preventDefault();
    let nombre =document.getElementById("nombre").value;
    let apellido =document.getElementById("apellido").value
    let fnac=document.getElementById("fnac").value
    
    const formData = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fnac
    };

  
   fetch('https://jsonplaceholder.typicode.com/users', {

    method: 'POST',


    headers: {
        'Content-Type': 'application/json'
    },


    body: JSON.stringify(formData)
})

.then(response => response.json())
.then(data => {

    console.log(data);
})

.catch(error => {

    console.error('Error:', error);
});
   
        document.getElementById("resultado").innerHTML = `Se registraron los datos en la API 
        Nombre: ${nombre} <br>
        Apellido: ${apellido} <br>
        Fecha de nacimiento: ${fnac}<br>`
    });
     