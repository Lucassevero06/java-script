let num = [1, 5, 8, 9, 3]
num.push(4)
num.sort()
//num.push() //insere um número na ultima posição do array

//num.length // diz quantas "caxinhas" tem o seu array

//num.sort() //organiza o seu array em ordem crescente, do menor para o maior
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro numero do seu array é ${num[0]}`)

let pos = num.indexOf(8)
console.log(`${pos}`)