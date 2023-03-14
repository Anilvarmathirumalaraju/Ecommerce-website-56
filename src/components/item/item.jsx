import { useContext } from "react"
import { CartContext } from "../context/cartcontext"
import "./item.css"
const Item = ({item}) =>{
    const{addCartData} = useContext(CartContext)
      return(
        <>
       <section className="Item">
            <img src="" alt="" className="Item-image"/>
            <article className="Item-title">{item.title}</article>
            <article className="Item-desc">{item.desc}</article>
            <section className="submit-part">
                <article className="Item-price">${item.price}</article>
                <button className="Item-button" onClick={()=>{addCartData(item)}}>Add to Cart</button>

            </section>
        </section>
        
        </>
      )
}
export default Item