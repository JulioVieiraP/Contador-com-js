document.addEventListener("DOMContentLoaded", () =>{
    const Btn = document.querySelector("#contador")

    Btn.addEventListener("click", () =>{
        const inicio = parseInt(document.querySelector("#inicio").value)
        const fim = parseInt(document.querySelector("#fim").value)
        const passo = parseInt(document.querySelector("#passo").value)

        if(isNaN(inicio) || isNaN(fim) ){
            document.querySelector("#res").innerHTML = "<b>impossivel contar</b>"
        } else if(isNaN(passo)){
            contador(inicio, fim, 1)
        }else{
            contador(inicio, fim, passo)
        }
    })
})

function contador(num1, num2, quantidade) {
    const res = document.querySelector("#res")
    let resultado = ""
    for (let i = num1; i <= num2; i += quantidade) {
        resultado += i

        if (i !== num2) {
            resultado += ", "
        }else{
            resultado += "."
        }
    }
    res.innerHTML = resultado
}

