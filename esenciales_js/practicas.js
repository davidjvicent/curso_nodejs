//programacion OO (POO)

var objeto = function() {

}

objeto.prototype.Saludar = function(msg, callback) {
    console.log('Saludo:', msg)
    if(typeof callback == 'function') {
        callback()
    } else {
        console.log('callback no es una funcion')
    }
    
}

var o = new objeto()

o.Saludar('hola david', function() {
    console.log('callback funcionando')
})

// objeto.prototype.Despedirse = function(msg) {
//     console.log('adios')
// }
// o.Despedirse()