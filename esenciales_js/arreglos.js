var arr = [60,21,21,35,25,265,-63,65,-5,65,25,-54]

//metodo antiguo
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
    
// }

//metodo estable o mas usado
// arr.forEach(function(a, b) {
//     console.log(a,b)
// });

//con arrow functions

arr.forEach((a, b) => console.log(a,b))

var resultado = arr.filter(valor => valor < 30)

console.log(resultado)

var resultado2 = arr.map(valor => {
    //manipulacion de datos
    return valor * valor
}).filter((x) => x > 2000)

console.log(resultado2)
console.log(arr)