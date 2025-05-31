function ehPalindromo(palavra) {
    const limpa = palavra.toLowerCase().replace()
    const invertida = limpa.split("").reverse.join("")
    return limpa === invertida
}

console.log(ehPalindromo("Arara"))