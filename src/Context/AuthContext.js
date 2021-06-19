import React,{useState,useEffect,useContext} from 'react'
import {auth} from '../Auth'

let AuthContext = React.createContext()

export function useAuth()
{
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    let [currentUser, setCurrentUser] = useState()
    let [images,setImages] = useState([])
    let [cartItems,setCartItems] = useState([])

    function signup(email,password)
    {
        console.log("email:", email)
       return auth.createUserWithEmailAndPassword(email,password)
    }

    function logout()
    {
        return auth.signOut()
    }

    function signin(email,password)
    {
        return auth.signInWithEmailAndPassword(email,password)
    }

    function updateFav(id)
    {
       let updatedImages = images.map(photo=>{
           if(photo.id === id)
           {    
               return {...photo, isFavorite : !photo.isFavorite}
           }
           else{
               return photo
           }
       })

       setImages(updatedImages)
       console.log("in updateFav",cartItems)
    }

    function addtoCart(newitem)
    {
        setCartItems(prev=>{
            return [
                ...prev,
                newitem
            ]
        })

    }

    function removefromcart(img)
    {
        let updatedcartitems = cartItems.filter(item=> item.id!==img.id)
        setCartItems(updatedcartitems)
    }

    function cartEmpty(){
        setCartItems([])
    }

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(res => res.json())
        .then(data=> setImages(data))
        const unsub = auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
        })

       return unsub
    },[])
   
    let value={
        currentUser,
        signup,
        signin,
        images,
        updateFav,
        addtoCart,
        cartItems,
        removefromcart,
        logout,
        cartEmpty
    }
    return (
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
    )
}

