import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom'


function Login() {
    // const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
        axios
        .get('http://localhost:3002/register')
        .then((res) => {
            console.log(res.data)
        })
    }


    const handleLogin =  async (event) => {
        event.preventDefault();
        try {
            const response = await axios
            .post('http://localhost:3002/login', { username, password })
            const token = response.data.token
            alert('Login successful')
            setUsername('')
            setPassword('')
            fetchUsers();
            navigate('/profile')
            window.location.reload();
            localStorage.setItem('token', token)
        } catch (error) {
            console.log('Login Error', error)
        }
    } 


  return (
    <div className='w-full h-screen flex justify-center mt-10'>
         <div className=' text-white flex justify-right items-right'>
            <form className='text-center border rounded-lg w-[600px] h-[460px] p-9'
            onSubmit={handleLogin}
            >
                <h1 className='font-epilogue font-semibold text-[30px] text-white justify-center pb-10'>Login</h1>
                 {/*Username Input */}
                 <label>Username</label>
                <br />
                <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
                <br />
                <br />
                 {/* Password Input */}
                 <label>Password</label>
                <br />
                <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                {/* Button */}
                <button className='w-[200px] h-[50px] border hover:bg-[#1dc071] rounded-full'
                type='submit'>Login</button>
                <h1 className="font-epilogue font-semibold text-[15px] text-white pt-3">Not Registered?</h1>
                <h1 className="font-epilogue font-semibold text-[15px] text-white px-3 py-2">Click Here👇</h1>
                <Link to='/SignUp'className='bg-[#8c6dfd] text-white font-bold py-2 px-4 rounded-full'>SignUp</Link>
            </form>
        </div>
    </div>
  )
}

export default Login