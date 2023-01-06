
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
            <img alt="shoping cart" src={shoppingCartImg}/>
            <span>{inBasket.length}</span>
            <span>{total}</span>
        </header>
    )

};