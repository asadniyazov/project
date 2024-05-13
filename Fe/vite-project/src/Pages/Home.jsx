import React, { useContext, useEffect, useState } from 'react'
import { Maincontext } from '../context/MainProvider'

function Home() {
  const [Category, setCategory] = useState([])
  const {AddBasket}=useContext(Maincontext)
    useEffect(() => {
        GetProduct()
    }, [])

    async function GetProduct() {
        const response = await fetch('http://localhost:3000/employee')
        const data = await response.json()
        setCategory(data)
    }
  return (
    <> <div style={{display:"flex",justifyContent:"center",gap:"30px"}}>
        {Category.map((x)=><>
          <div style={{border:"1px solid black", width:"300px",height:"200px"}}>
            <h1>{x.title}</h1>
            <h4>{x.author}</h4>
            <p>{x.price}</p>
            <button onClick={()=>AddBasket(x)}>Add Basket</button>
          </div>
        </>)}
        </div>
    </>
  )
}

export default Home