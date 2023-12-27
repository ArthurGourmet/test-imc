function Meuscop(){
    const formulario= document.querySelector("form")
    formulario.addEventListener("submit", function (e){ //assim previnimos que o submit funcione
        e.preventDefault()
        const pesodigitado= e.target.querySelector(".test1")
        const alturadigitado= e.target.querySelector(".test2")
        const peso = Number(pesodigitado.value)
        const altura = Number(alturadigitado.value)
        if(!peso){
            cresultado("peso invalido", false)
            return

        }
        if(!altura){
            cresultado("altura invalida", false)
            return

        }
        const imc1=imc(peso,altura);
        const nivelimc= nivel(imc1)

        const msg = `seu imc é ${imc1} e seu nivel é (${nivelimc})`
        cresultado(msg,true)


        function nivel(imc1){
            const nvl=["abaixo do peso","peso normal",'sobre peso','obesidade grau 1','obesidade grau 2','obesidade grau 3']

            if (imc1 >= 39.9){
                return nvl[6]

            }if (imc1 >= 34.9){
                return nvl[5]

            }if (imc1 >= 29.9){
                return nvl[4]

            }if (imc1 >= 24.9){
                return nvl[3]

            }if (imc1 >= 18.5){
                return nvl[2]

            }if (imc1 < 18.5){
                return nvl[1]

            }
        }
    })
    function imc(peso,altura){
        const imccall= peso / (altura * altura)
        return  imccall.toFixed(1)
    }
    function criatext(){
        const p= document.createElement("p");
        return p
    }
    function cresultado (msg,isValid){
        const resultado= document.querySelector(".resultado") 
        resultado.innerHTML = " "

        const text =criatext() ;

        if(isValid){
            text.classList.add("god")

        }else{
            text.classList.add("bad")
        }
        text.innerHTML = msg;
        resultado.appendChild(text)
    }

}
Meuscop()