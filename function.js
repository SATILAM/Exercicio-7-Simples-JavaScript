function ordenarArray(array) {
    return array.sort((a, b) => a - b);
  }
  
  console.log(ordenarArray([3, 2, 1, 5, 4])); // Deve retornar [1, 2, 3, 4, 5]