import React, { useContext } from 'react'
import { Maincontext } from '../context/MainProvider'

function Basket() {

  const {basket,deleteBasketCard,increase,decrease,Total}=useContext(Maincontext)
  return (
   <>
     <div style={{display:"flex",justifyContent:"center",gap:"30px"}}>
     <p>Total:{Total()}</p>
        {basket.map((x)=><>
          <div style={{border:"1px solid black", width:"300px",height:"200px"}}>
            <h1>{x.title}</h1>
            <h4>{x.author}</h4>
            <p>{x.price}</p>
            <p>{x.count}</p>
            <button onClick={()=>decrease(x)}>-</button>
            <button onClick={()=>deleteBasketCard(x)}>X</button>
            <button onClick={()=>increase(x)}> +</button>
          </div>
        </>)}
        </div>
   </>
  )
}

export default Basket