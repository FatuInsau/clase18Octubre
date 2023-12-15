// atrape el div del html
let divPersonajes = document.getElementById('personajes')

// de esta forma le agregamos html al elemento seleccionado
// divPersonajes.innerHTML= '<p>Vengo de Javascript</p>'

fetch('https://rickandmortyapi.com/api/character')
.then( (data)=>{
    return data.json()
})
.then( (data)=>{
    // ahora personajes es un array de personajes 
    let personajes = data.results;
    personajes.forEach( (elementoPersonaje) => {
        divPersonajes.innerHTML+=`<div class="personajecito">
                                    <h2>Nombre: ${elementoPersonaje.name}</h2>
                                    <p>Genero: ${elementoPersonaje.gender}</p>
                                </div>`
    });
}).catch( (error)=>{
    console.log(error)
}) 