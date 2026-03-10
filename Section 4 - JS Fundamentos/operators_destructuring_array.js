const [a] = [10];
console.log(a); // 10

const      [n1,  , n3,  , n5,     n6 = 0] = 
           [10, 7, 9,  8                ];
console.log(n1,    n3,    n5,     n6    ); // 10 9 undefined 0
//          10    9  undefined  0

const [ , [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota); // 6 // pouco usado, melhor acessar pelo íncice, como abaixo:

const notas = [[, 8, 8], [9, 6, 8]];
matematica = notas[1][1] // retorna o mesmo 6
console.log(matematica); // 6


