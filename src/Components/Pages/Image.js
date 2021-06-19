import React,{useState} from 'react'
import {useAuth} from '../../Context/AuthContext' 
import useHover from '../../CustomHooks/useHover'

function Image({url,img}) {
    let {updateFav,addtoCart,cartItems,removefromcart} = useAuth()
    let [hovered,ref] = useHover()

    function isFavourite()
    {
        if(img.isFavorite)
        {
            return <i className="ri-heart-fill addtoliked" onClick={()=>{updateFav(img.id)}}></i>
    
        }
        else if(hovered)
        {
            return <i className="ri-heart-line addtoliked" onClick={()=>{updateFav(img.id)}}></i>
        }
    }

    let cartadd = ()=> {
        let alreadyinCart = cartItems.some(item=> item.id===img.id)
        if(alreadyinCart)
        {
    
           return <i class="fa fa-cart-plus addtocart" onClick={()=>{removefromcart(img)}}></i>
        }
        else if(hovered)
        {
            return <i className="fa fa-plus-circle addtocart" onClick={()=>{addtoCart(img)}}></i>
        }
    }

    return (
        <div className="imagecontainer" ref = {ref} >
             <img src={url} />
             {isFavourite()}
             {cartadd()}
        </div>
    )
}

export default Image
