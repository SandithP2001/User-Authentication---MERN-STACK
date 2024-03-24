import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast';
import{useNavigate} from 'react-router-dom';




export default function Login() {
const navigate = useNavigate()
const [data, setData] = useState({
  email:'',
  password:'',
})



  const loginUser = async (e) => {
    e.preventDefault()
    const {email, password} = data
    try {
      const {data} = await axios.post('/login', {
        email,
        password
      });
      if(data.error) {
        toast.error(data.error)
      }else {
        setData({});
        navigate('/dashboard')
      }
    } catch (error) {
      
    }
  }

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type='email' placeholder='Enter your Email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>

        <label>Password</label>
        <input type='password' placeholder='Enter your Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>

        <button type='submit'>Login</button>  
        </form>
    </div>
  )
}