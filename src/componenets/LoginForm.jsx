import React,{useState,useContext} from 'react'
import { ThemeContext } from './ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

const LoginForm=()=>{
    const {theme,toggleTheme}=useContext(ThemeContext)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();

        if (email.trim()==''|| password.trim()==='') {
            setError('Please fill in all fields')
        }else{
            setError('')
            setEmail('')
            setPassword('')
        }
    }
  return (
    <div className={`container ${theme} `} >
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email' />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' />
            {error && <p >{error}</p>}
            <button type='submit'>Login</button>
            
        </form>
        <button className="theme-button" onClick={toggleTheme}> 
            <FontAwesomeIcon icon={faAdjust} />
        </button>

    </div>
  )
}
export default LoginForm


