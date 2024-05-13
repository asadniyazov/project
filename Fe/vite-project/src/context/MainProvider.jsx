import React, { createContext, useState } from 'react'

 export const Maincontext=createContext()

function MainProvider({children}) {

    const [basket, setbasket] = useState([])

    function AddBasket(element) {
        const index=basket.findIndex((x)=>x._id===element._id)
        if (index===-1) {
        setbasket([...basket,{element}])
        }
    
    }
    function deleteBasketCard(item) {
        setbasket(basket.filter((x)=>x._id !== item._id))
        console.log(item._id)
    }
    function increase() {
        
    }

  return (
    <Maincontext.Provider value={{basket,AddBasket,deleteBasketCard}}>
    {children}
    </Maincontext.Provider>
  )
}

export default MainProvider