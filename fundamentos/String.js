const escola = "cod3r"
console.log(escola.charAt(4))//pega um caractere dentro da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//pegar o codigo html
console.log(escola.indexOf("3"))//pegar apartir do indice

console.log(escola.substring(1))
console.log(escola.substring(0, 3))//va do indice 0 até o 3 mas nao considere o numero 3

console.log("Escola ".concat(escola).concat("!"))
console.log('Escola' + escola + "!")// + tambem pode concatenar
console.log(escola.replace(3, "e"))//subistitua o numero 3 pela letra e

console.log("Ana, Maria, Pedro".split(","))//array split separa com o item dentro dos parenteses
