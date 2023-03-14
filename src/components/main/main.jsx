import { useEffect, useState } from "react"
import axios from "axios"
import Header from "../header/header"
import Item from "../item/item"

const Main =() =>{
    const [milk,setmilk] = useState([])
    const [curd,setcurd] = useState([])
    useEffect(()=>{
         axios.get("http://localhost:1337/api/milks").then((milks)=>{
                   setmilk(milks.data.data);
                //    console.log(milks.data.data);
         }).catch(()=>{

         }).finally(()=>{

         })   
    },[])
    useEffect(()=>{
        axios.get("http://localhost:1337/api/curds").then((curds)=>{
                    setcurd(curds.data.data);
                    // console.log(curds.data.data);
        }).catch(()=>{

        }).finally(()=>{

        })   
    },[])
    return(
       

        <>
        <Header/>
        <article className="milk-main">Milk </article>
            {milk.map((item, key)=> {
                    return <Item item={item.attributes} key={key}/>
                })}
        <article className="curd-main">Curd </article>
            {curd.map((item, key)=> {
                    return <Item item={item.attributes} key={key}/>
                })}
        
        </>
    )
}
export default Main