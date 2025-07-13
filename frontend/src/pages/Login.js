import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { AnimatePresence, motion } from "framer-motion"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

  return (
    <form className='login' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>E-mail:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}
            value = {email}
        ></input>
        <label>Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}
            value = {password}
        ></input>
        <button disabled={isLoading}>Login</button>
        <AnimatePresence>
            {error && <motion.div className='error'
                initial={{opacity:0, y:-20}}
                animate={{opacity:1, y:0}}
                exit={{opacity:1, y:-20}}
            >{error}</motion.div>}
        </AnimatePresence>
    </form>
  )
}

export default Login