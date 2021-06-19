import React,{useState} from 'react';
import '../App.css'
import {useAuth} from '../Context/AuthContext'
import {Link,useHistory} from 'react-router-dom'

function Signup() {
    let [inputData, setInputData] = useState({email:"", pass:"", repass:"",username:""})
    let [isLoading, setIsLoading] = useState(false)
    let [error, setError] = useState('')
    let {signup} = useAuth()
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
        if(inputData.pass !== inputData.repass)
        {
            return setError("Password doesn't match")
        }
        try{
            setError('')
            setIsLoading(true)
            await signup(inputData.email, inputData.pass)
            history.push("/")
        }
        catch{
            setError("errorr")
        }
        setIsLoading(false)
        setInputData({email:"", pass:"", repass:"",username:""})
    }
    return (
        <div className="parent">
              <div className="intro">
                <h1 className="intro--heading">Picsome</h1>
                <p className="intro--subhead">Pick your Favorite Pic</p>
            </div>
            <div className="container">
                <form className="signupform" onSubmit={handleSubmit}>
                    <h2 className="signup signup-today">Hurrah!! Sign Up  Today</h2>
                    <p className="signupform--intro">Are you fed up of finding a perfect picture for your work? Don't worry we are here to solve your problem!!</p>
                    <p className={error && "error"}>{error ? "Enter a valid Email address" : null}</p>
                    <input 
                        type="text"     
                        id="username" 
                        name="username" 
                        value={inputData.username} 
                        onChange={handleChange} 
                        placeholder="Name"
                    />
                    
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
                        placeholder="Password"
                    />
                    <input 
                        type="password" 
                        id="pass2" 
                        name="repass"
                        value={inputData.repass}
                        onChange={handleChange}
                        placeholder="Re-enter Password"
                    />
                    <button className="btn" disabled={isLoading}>Sign Up</button>
                </form>
                <p className="container--info">Trust us, we will never share your information without your permission.</p>
                <p>Already having account? <Link to="/login"><span className="signupglitch">Sign in</span></Link></p>
            </div>
        </div>
    )
}

export default Signup
