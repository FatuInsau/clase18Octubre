// fetch
// es un metodo que nos permite hacer un pedido de informacion a una pagina
// retorna una promesa

let respuesta = fetch('https://rickandmortyapi.com/api/character');

// cuando este la respuesta de fetch, entonces hace lo siguiente
// cuando este cumplida la promesa, entonces...
respuesta.then( (respuesta)=>{
// recibimos una respuesta en formato response
// entonces lo convertimos en formato json (que es facil de leer para js)
    return respuesta.json()
} ).then( (respuesta)=>{
    respuesta.results.forEach( (personajeObj) => {
        console.log(personajeObj.name)
    });
// catch atrapa las promesas que no se cumplieron
// atrapa los errores y hacemos console.log para verlos
}).catch( (error)=>{
    console.log(error)
}) 


// objeto document
// permite acceder a los elementos del html

// QuerySelector
// permite seleccionar un solo elemento del html
// si hay más de uno igual, selecciona el primero
let divPersonajes = document.querySelector('#personajes')

// getElementById
// busca un elemento del html por su id
// devuelve un solo elemento
let div = document.getElementById('personajes')

// getElementsByClassName
// buscar todos los elementos que tengan esa clase
// nos retorna un array de elementos 
let arrDeElementos = document.getElementsByClassName('hola')

// querySelectorAll
// buscar todos los elementos que coincidan con lo que le paso
// retorna un array de elementos si es más de uno
let arrParrafo=document.querySelectorAll('p')
