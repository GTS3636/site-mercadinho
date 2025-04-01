let res = document.getElementById("res")
let calcular = document.getElementById("calcular")
const valoresProds = [19,8,5]
calcular.addEventListener("click",(e)=>{
    e.preventDefault()
    let carrinho = [0,0,0]
    carrinho[0] = document.getElementById("quantMaca").value
    carrinho[1] = document.getElementById("quantLaj").value
    carrinho[2] = document.getElementById("quantBanana").value
    let valorTotal = []
    let precoFinal = 0
    for(let i=0; i<carrinho.length; i++){
        valorTotal[i] = carrinho[i] * valoresProds[i]
        precoFinal += valorTotal[i]
    }
    let desc = gerarAleatorio(1,9)
    let valorDesc = precoFinal * (desc/100)
    res.innerHTML = ``
    res.innerHTML = `Desconto: ${desc}%<br>`
    res.innerHTML += `Preço final sem desconto: ${precoFinal}<br>`
    res.innerHTML += `Preço final com desconto: ${precoFinal-valorDesc}`
})
function gerarAleatorio(max,min){
    return Math.floor(Math.random()*(max - min + 1) + min)
}