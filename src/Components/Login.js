import React,{useState} from 'react'
import {Link,useHistory} from "react-router-dom"
import {useAuth} from "../Context/AuthContext"

function Login() {

    let [inputData, setInputData] = useState({email:"", pass:"", repass:"",username:""})
    let [isLoading, setIsLoading] = useState(false)
    let [error, setError] = useState('')
    let {signin} = useAuth()
    let history = useHistory()

    function handleChange(e)
    {
       const {name,value} = e.target
        
       setInputData(prev=>{
           return {
               ...prev,
               [name]:value
           }
       })
        
    }

    async function handleSubmit(e)
    {
       
        e.preventDefault()
        try{
            setError('')
            setIsLoading(true)
            await signin(inputData.email, inputData.pass)
            history.push("/")
        }
        catch(err){
            console.log(err)
            setError(err.message)
        }
        setIsLoading(false)

    }
    return (
        <div className="parent">
            <div className="intro">
                <h1 className="intro--heading">Picsome</h1>
                <p className="intro--subhead">Pick your Favorite Pic</p>
            </div>
            <div className="container">
                <form className="signupform" onSubmit={handleSubmit}>
                    <h2 className="signup">Login Now</h2>
                    <p className={error && "error"}>{error && "User not found. Try again"}</p>
                    <input 
                        type="text"     
                        id="email" 
                        name="email" 
                        value={inputData.email} 
                        onChange={handleChange} 
                        placeholder="Email"
                    />
                    <input 
                        type="password" 
                        id="pass" 
                        name="pass"
                        value={inputData.pass}
                        onChange={handleChange}
                        placeholder="password"
                    />
                    <button className="btn" disabled={isLoading}>Sign In</button>
                </form>
                <p>Need an account? <Link to="/signup"><span className="signupglitch">Sign up</span></Link></p>
            </div>
        </div>
    )
}

export default Login

