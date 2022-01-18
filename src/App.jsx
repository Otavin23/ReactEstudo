import React from "react"

import Primeiro from "./components/basicos/Primeiro";
import ComFilho from "./components/basicos/ComFilhos"
import ComParametros from "./components/basicos/ComParametro"
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/repeticao";
import Condicional from "./components/basicos/condicional"
import Sobrenomes from "./components/comunicação/direta/Pai"
import Super from "./components/indireta/Super"
import "./App.css"
import Contador from "./components/contar/cont"

export default (props) => (

    <div className="App">
        <h1>Fundamentos React</h1>
        
        <div className="Cards">
            <Card titulo="#08 Contador" color="#934">
                <Contador passo={10}></Contador>    
            </Card>
        </div>

    </div>
);