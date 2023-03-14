import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/cartcontext"
import "./header.css"
const Header=()=>{
    const {cartData} = useContext(CartContext)
    const navigate = useNavigate()
    return(
        <>
        <nav className="hedder">
            <section className="headding">
               Game site
            </section>
            <section className="logo" onClick={()=>{navigate('/cart')}}>
                <span>{cartData.length}</span>
                <i className="fa fa-shopping-cart"></i>
            </section>
        </nav>
        
        </>
    )
}
export default Header