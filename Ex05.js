function fatorial(n) {
    if(n === 0 || n === 1){
        return 1
    }
    return n * fatorial(n - 1)
}

console.log("0! =" + fatorial(0))
console.log("1! =" + fatorial(1))
console.log("5! =" + fatorial(5))
console.log("10! =" + fatorial(10))