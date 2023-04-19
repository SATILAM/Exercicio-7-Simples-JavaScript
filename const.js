const array = [3, 2, 1, 5, 4];
const arrayOrdenado = array.slice().sort((a, b) => a - b);
console.log(arrayOrdenado); // Deve retornar [1, 2, 3, 4, 5]