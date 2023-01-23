//console.log("Hola Mundito!");

const txtOp1 = document.getElementById("op1")
const txtOp2 = document.getElementById("op2")
const txtOperacion = document.getElementById("operacion")
const btnCalcular = document.getElementById("calcular")
const parResultado = document.getElementById("resultado")
const parResultado_Operacion = document.getElementById("resultado_operacion")

function calcular(){
    console.log("Boton 'Calcular' presionado!")
    const operador_Value = txtOperacion.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if((operador_Value == "+" || operador_Value == "-" || operador_Value == "*" || operador_Value == "/") && isNaN(op1)==false && isNaN(op2)==false){
        console.log("Calculo posible")
        parResultado.style="color:green"
        parResultado.innerText = "Calculo posible."
        let resultado;
        switch(operador_Value){
            case "+":
                resultado = op1+op2
                break;
            case "-":
                resultado = op1-op2
                break;
            case "*":
                resultado = op1*op2
                break;
            case "/":
                resultado = op1/op2
                break;
        }
        parResultado_Operacion.innerText = "= "+resultado
    }
    else{
        console.log("Calculo imposible")
        parResultado.style="color:red"
        parResultado.innerText = "Calculo imposible."
        parResultado_Operacion.innerText = ""
    }
}

//Tambien se puede agregar el listener desde JS y no solamente desde el HTML
btnCalcular.addEventListener('click', calcular)
//en el html (submit)
//onclick=calcular()