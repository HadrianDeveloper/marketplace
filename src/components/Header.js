import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Header({inBasket}) {
    let total = 0;

    const shoppingCartImg = "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/512/external-shopping-basket-interface-kiranshastry-lineal-color-kiranshastry.png"
    
    if (inBasket.length){
        total = inBasket.map((item) => item.price)
        .reduce((a, b) => a + b)
    }

    return (
        <header>
            <h1>Rubbish 'r' Us</h1>
            <Link to="/basket">
                <img alt="shoping cart" src={shoppingCartImg}/>
            </Link>
            <span>{inBasket.length}</span>
            <p>£{total}</p>
        </header>
    )

};