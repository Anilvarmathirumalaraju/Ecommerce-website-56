import { useContext, useRef } from "react"
import { CartContext } from "../context/cartcontext"
import useRazorpay from "react-razorpay";
import { useCallback } from "react"
import "./cart.css"
const Cart =()=>{
    const {cartData} = useContext(CartContext)
    const RazorPay = useRazorpay();
    const razorPayDisplay = useCallback(async (total)=> {
        const options = {
            key: "rzp_test_Qwg3uVzASfFfjU",
            amount: total*100,
            currency: "INR",
            name: "Milk Site",
            description: "Milk Transaction",
            handler: (res)=> {
                console.log(res);
            },
            prefill: {
                name: "Anil varma",
                email: "tanilvarma619@gmail.com",
                contact: "6303364305"
            
            },
            notes: {
                address: "work address"
            },
            theme: {
                color: "#3399cc",
            },
        }
        const rzp1 = new RazorPay(options);
        rzp1.open();
        
    }, [RazorPay])
    
 
   
    return(
        <>
        <section>
            <section className="listitems">
            <h2 className="headingcart">CART ITEMS</h2>
                {cartData.map((listitems,key)=>{
                    return (
                        <>
                        
                        <article className="list-title">{listitems.title}</article>
                        <article className="list-desc">{listitems.desc}</article>
                        <article className="list-price">{listitems.price}</article>
                        
                        <button>Remove fronm cart</button>
                        </>
                    )
                })}
            </section>
            <section className="bill">
            <h2 className="headingcart">BILLING INFORMATION</h2>
        
            {
                cartData.map((billing,key)=>{
                   
                      return(
                        <>
                        <article>{billing.title}</article>
                        <article>{billing.price}</article>
                       
                        </>

                      )
                })
            }
            <article className="total">Total : 108</article>
            <button className="paymentbutton" onClick={()=>{razorPayDisplay(300)}}>checkout</button>
        
            </section>
        </section>
        </>
    )
}
export default Cart