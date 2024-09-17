const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const seletor = document.getElementById("deslocamento")
const texto = document.getElementById("para-criptografar")
const botao = document.getElementById("botao")

for (let i=0;i<alfabeto.length;i++){
    seletor.innerHTML = seletor.innerHTML + `<option value="${i}">${alfabeto[i]}</
    option>`
}

botao.addEventListener("click",()=>{
    let textoParaCriptografar = texto.value
    console.log(textoParaCriptografar)
})