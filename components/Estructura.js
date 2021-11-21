const arrayElements = [];
const Estructura = () =>{
    const [resultado,setResultado] = React.useState(0);
    const changeStateFinal = () => {
        setResultado(resultados());        
    }
    const changeState = (valores) =>{
        let valorNuevo = document.querySelector("#cajaResult2").value;
        let operator = document.querySelector("#operador").value;
        let cajaResult = document.querySelector("#cajaResult").value;
        if(operator === "restar"){    
             setResultado(cajaResult+""+valores)
         }else if (operator === "sumar"){
            setResultado(cajaResult+""+valores)
         }else if(operator === "multiplicar"){
            setResultado(cajaResult+""+valores)
         }else {
            setResultado(valorNuevo)
         }             
    }

    const procesar = (valor) => {       
        llenarCampos(valor);
        changeState(valor);
    }
    const resetear = () =>{
        setResultado(0)
        document.querySelector("#cajaResult2").value="";
        arrayElements.splice(0,arrayElements.length)
    }
   

    return (
        <div>
            <table className="table-bottom">
                <tr>
                    <td colspan="4">
                        <input className="cajaResult" type="text" name="cajaResult" id="cajaResult" value={resultado} />
                        <input type="hidden" name="cajaResult2" id="cajaResult2" />
                        <input type="hidden" name="operador" id="operador" />
                        <hr />
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={() => procesar(7)}>7</button>
                    </td>
                    <td>
                        <button onClick={() => procesar(8)}>8</button>
                    </td>
                    <td>
                        <button onClick={() => procesar(9)}>9</button>
                    </td>
                    <td>
                        <button className="funciones" value="multiplicar" onClick={() => opcion("multiplicar")}>X</button>
                    </td>
                </tr>                 
                <tr>
                    <td>
                        <button onClick={() => procesar(4)}>4</button>
                    </td>
                    <td>
                        <button onClick={() => procesar(5)}>5</button>
                    </td>
                    <td>
                        <button onClick={() => procesar(6)}>6</button>
                    </td>
                    <td>
                        <button className="funciones" value="restar" onClick={() => opcion("restar")}>-</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={() => procesar(1)}>1</button>
                    </td>
                    <td>
                        <button onClick={() => procesar(2)}>2</button>
                    </td>
                    <td>
                        <button onClick={() => procesar(3)}>3</button>
                    </td>
                    <td>
                        <button className="funciones" value="sumar" onClick={() => opcion("sumar")}>+</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="c" onClick={resetear}>C</button>
                    </td>
                    <td>
                        <button onClick={() => procesar(0)}>0</button>
                    </td>
                    <td>
                        <button className="funciones">⌫</button>
                    </td>
                    <td>
                        <button className="funciones" onClick={changeStateFinal}>=</button>
                    </td>
                </tr>                
               
            </table>
            <br/>
            <div>        
                
            </div>
        </div>
    );
}

const opcion = (op) => {
    let cajaResult2 = document.querySelector("#cajaResult2").value;
    let cajaResult = document.querySelector("#cajaResult").value;
    if(op == "sumar"){
        
        document.querySelector("#cajaResult").value=cajaResult+"+";
        arrayElements.push(cajaResult2);
        document.querySelector("#cajaResult2").value = "";
        document.querySelector("#operador").value = "sumar";
    }
    if(op == "restar"){
        document.querySelector("#cajaResult").value = cajaResult+"-";
        arrayElements.push(cajaResult2);
        document.querySelector("#cajaResult2").value="";
        document.querySelector("#operador").value="restar";
    }
    if(op == "multiplicar"){
        document.querySelector("#cajaResult").value = cajaResult+"X";
        arrayElements.push(cajaResult2);
        document.querySelector("#cajaResult2").value="";
        document.querySelector("#operador").value="multiplicar";
    }      
} 
const sumar = (array) => {
        
        var result=0;
        array.forEach(element => {
            result += parseInt(element)
        });
        console.log("resultado: "+result)
        return result;       
}
const restar = (array) => {
        let result=0;
        array.forEach(element =>{
            result = ((result - element) * (-1))
            result = Math.abs(result)
        })
       // result = (result)*(-1)
        console.log("resultado: "+result)
        return result;        
}
const multiplicar = (array) => {
    let result=1;
    array.forEach(element =>{
        result *= element
    })
    return result;        
}
const resultados = () =>{
    const operador = document.querySelector("#operador").value;
    let cajaResult2 = document.querySelector("#cajaResult2").value;
    let resulta = 0;
    arrayElements.push(cajaResult2);
    document.querySelector("#cajaResult2").value = "";
    if(operador == "sumar"){
        resulta = sumar(arrayElements);
    }
    if(operador == "restar"){
        resulta = restar(arrayElements);
    }
    if(operador == "multiplicar"){
        resulta = multiplicar(arrayElements);
    }           
    return resulta;
}

const llenarCampos = (valor) => {
    let cajaResult2 = document.querySelector("#cajaResult2").value;
    let nuevoValor = cajaResult2+""+valor;
    document.querySelector("#cajaResult2").value = nuevoValor;

}

console.log(arrayElements);