import React, { useContext } from 'react'
import { Maincontext } from '../context/MainProvider'

function Basket() {

  const {basket,deleteBasketCard}=useContext(Maincontext)
  return (
   <>
     <div style={{display:"flex",justifyContent:"center",gap:"30px"}}>
        {basket.map((x)=><>
          <div style={{border:"1px solid black", width:"300px",height:"200px"}}>
            <h1>{x.element.title}</h1>
            <h4>{x.element.author}</h4>
            <p>{x.element.price}</p>
            <p>{x.count}</p>
            <button onClick={()=>deleteBasketCard(x)}>delete</button>
          </div>
        </>)}
        </div>
   </>
  )
}

export default Basket