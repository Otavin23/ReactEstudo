import React, { Component } from "react";
import Display from "./display"
import PassoForm from "./PassoForm"



export default class Contador extends Component{

    state = {
        passo: 1,
        valor: 0
    }

    constructor(props){
        super(props)

        this.state = {
            passo: this.props.passo || 1,
            valor: this.props.valor || 0
        }
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = ()=> {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }
    mudarPasso = () => {
        this.setState({
            passo: novoPasso
        })
    }
    render(){
        return (
            <div>
                <h2>Contador</h2>
                <PassoForm passo={this.state.passo}
                    onPassoChange={mudarPasso}></PassoForm>
                <Display></Display>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}