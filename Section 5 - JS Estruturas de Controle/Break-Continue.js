// Break influencia os laços SWITCH, FOR e WHILE
// Continue influencia os laços FOR e WHILE

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console;
for (let i in nums) {
  if (i == 5) break;
  console.log(`${i} = ${nums[i]}`);
}

console.log("Continue");
for (let j in nums) {
  if (j == 5) continue; // Interrompe a iteração atual do loop e continua na próxima
  console.log(`${j} = ${nums[j]}`);
}
console.log("Rótulo externo");
rotuloExterno:
for (let k in nums){
    for (let l in nums){
        if(k == 2 && l == 3) break rotuloExterno // Executa o break no laço externo, ou seja, interrompe os dois laços
        console.log(`Par = ${k}, ${l}`)
    }
}