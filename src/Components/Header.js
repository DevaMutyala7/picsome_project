import React, { useState } from 'react'
import {useAuth} from "../Context/AuthContext"
import {Link} from 'react-router-dom'

function Header() {
    let [toggleheader,setToggleHeader] = useState(false)
    let {cartItems,logout,inputData} = useAuth()
  
    return (
        <div className="Header">
             <header className="innerContainer">
                <Link to="/"><h1 className="logo">PicSome</h1></Link>
                <nav className="nav-bar">
                    <ul className="nav-items">
                        <li className="nav-item bars" onClick={()=>{setToggleHeader(prev=> !prev)}}><i class="fa fa-bars fa-2x"></i></li>
                        <div className={`header--icons ${toggleheader && "header--icons-activate"}`}>
                            <li className="nav-item"><a className="nav-link profile" href="#"><i class="fa fa-user"></i><span className="greet">Welcome</span></a></li>
                            <Link to="/cart"><li className="nav-item cart-count"><a className="nav-link" href="#"><i class="fa fa-cart-plus"></i></a><span class="cart-items">{cartItems.length}</span></li></Link>
                            <li className="nav-item" onClick={logout}><a className="nav-link" href="#"><i class="fa fa-sign-out"></i></a></li>
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
