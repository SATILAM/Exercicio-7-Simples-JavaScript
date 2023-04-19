# Exercício-7-Simples-JavaScript

02 exemplos de códigos simples de função e constante.

EXEMPLO-1, Function:

O código, deve ordenar o array fornecido em ordem crescente.

A função sort() é usada para classificar os elementos de um array. Quando fornecida uma função de comparação, 
essa função é usada para determinar a ordem de classificação.

A função de comparação (a, b) => a - b compara dois elementos a e b. Se a for menor que b, a função retorna um número negativo. 
Se a for maior que b, a função retorna um número positivo. Se a for igual a b, a função retorna zero.

Assim, quando a função sort() é chamada com a função de comparação (a, b) => a - b, ela ordena os elementos do array em ordem crescente.

O código deve retornar [1, 2, 3, 4, 5] quando a função ordenarArray() é chamada com o argumento [3, 2, 1, 5, 4].

..........................##................................................

EXEMPLO-2, Const:

O código, a constante array é definida como o array [3, 2, 1, 5, 4]. Em seguida, a constante arrayOrdenado é definida como uma cópia ordenada do array array.

A função slice() é usada para criar uma cópia do array array. Isso é importante porque a função sort() classifica o array original.

O método sort() é chamado no array copiado e a função de comparação (a, b) => a - b é usada para classificar o array em ordem crescente. 

A constante arrayOrdenado agora contém uma versão ordenada do array original.

A constante arrayOrdenado é impressa no console usando console.log().
