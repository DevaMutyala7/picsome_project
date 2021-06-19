import React from 'react'
import Header from './Header'
import Image from '../Components/Pages/Image'
import Footer from './Footer'
import {useAuth} from '../Context/AuthContext'

function Dashboard() {
    let {images} = useAuth()
    let image = images.map(item=> <Image key={item.id} img={item} {...item} />)
    return (
        <div className="mainpage">
            <Header />
            <div className="products">
                {image}
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
