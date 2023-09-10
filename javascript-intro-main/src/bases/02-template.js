

const nombre = 'Juan'
const apellido = 'Beltrán'

const nombreCompleto = `${nombre} ${apellido}` 

//console.log(`${ 1 + 1 }`) 

function getSaludo(nombre){
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)
