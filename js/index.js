
    var operandoa;
    var operandob;
    var operacion;


     function numerouno (){

        document.getElementById('result').innerHTML= result.textContent  + "1";
     }
     function numerodos (){
        document.getElementById('result').innerHTML = result.textContent  + "2";
    }
    function numerotres (){
        document.getElementById('result').innerHTML = result.textContent  + "3";
    }
    function numerocuatro (){
        document.getElementById('result').innerHTML = result.textContent  + "4";
    }
    function numerocinco (){
        document.getElementById('result').innerHTML = result.textContent  + "5";
    }
    function numeroseis (){
        document.getElementById('result').innerHTML = result.textContent  + "6";
    }
    function numerosiete (){
        document.getElementById('result').innerHTML = result.textContent  + "7";
    }
    function numeroocho (){
        document.getElementById('result').innerHTML = result.textContent  + "8";
    }
    function numeronueve (){
        document.getElementById('result').innerHTML = result.textContent  + "9";
    }
    function numerocero (){
        document.getElementById('result').innerHTML = result.textContent  + "0";
    }
    function numerodecimal (){
        document.getElementById('result').innerHTML = result.textContent  + ",";
    }

    function borrar (){
        document.getElementById('result').innerHTML =  "" ;
        operandoa=0;
        operandob=0;
           
     }

function limpiar() {
    document.getElementById('result').innerHTML = operandoa;
    result.textContent="";
}

function sumar (){
    operandoa=result.textContent;
    document.getElementById('current-function').innerHTML =  "+" ;
     operacion="+";
     limpiar();
}

function restar (){
    operandoa=result.textContent;
    document.getElementById('current-function').innerHTML =  "-" ;
    operacion="-";
    limpiar();
}

function multiplicar(){
    operandoa=result.textContent;
    document.getElementById('current-function').innerHTML =  "*" ;
        operacion="*";
        limpiar();
}

function dividir(){
    operandoa=result.textContent;
    document.getElementById('current-function').innerHTML =  "/" ;
        operacion="/";
        limpiar();
}
function igual(){
    operandob=result.textContent;
    document.getElementById('current-function').innerHTML =  "=" ;
    var res= 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;

            case "-":
                res = parseFloat(operandoa) - parseFloat(operandob);
                break;
                case"*": 
                res = parseFloat(operandoa) * parseFloat(operandob);
                break;
                case"/":
                res = parseFloat(operandoa) / parseFloat(operandob);
                break;


    }
    document.getElementById('result').innerHTML = res;
    alert("Su resultado es "+ res);
}
