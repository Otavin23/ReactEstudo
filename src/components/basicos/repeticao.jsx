
import React from "react"
import produtos from "../../data/products"


export default (props) =>{

    function getProdutosListItem() {
        return produtos.map(produt =>{
            return <li key={produt.id}>
                        {produt.id} -
                        {produt.name} - R${produt.preco}
                   </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}