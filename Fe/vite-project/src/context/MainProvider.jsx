import React, { createContext, useState } from 'react'
import useLocalstorage from '../Hooks/useLocalstorage'

 export const Maincontext=createContext()

function MainProvider({children}) {

    const [basket, setbasket] = useLocalstorage("basket",[])

    function AddBasket(element) {
        const index=basket.findIndex((x)=>x._id===element._id)
        if (index===-1) {
        setbasket([...basket,{...element,count:1}])
        }
    
    }
    function deleteBasketCard(item) {
        setbasket(basket.filter((x)=>x._id !== item._id))
        console.log(item._id)
    }
    function increase(item) {
        const index=basket.findIndex((x)=>x._id===item._id)
        if (index!==-1) {
          basket[index].count++
          setbasket([...basket])
        }
    }
    function decrease(item) {
      const index=basket.findIndex((x)=>x._id===item._id)
       let element =basket[index]
      if (element.count>1) {
        basket[index].count--
        setbasket([...basket])
      }
  }
  function Total() {
    basket.reduce((prev,initial)=>prev+initial.count*initial.price,0)
  }
  return (
    <Maincontext.Provider value={{basket,AddBasket,deleteBasketCard,increase,decrease,Total}}>
    {children}
    </Maincontext.Provider>
  )
}

export default MainProvider