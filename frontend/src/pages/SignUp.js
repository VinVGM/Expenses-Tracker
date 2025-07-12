import React, { useState } from 'react'
import {useSignUp} from "../hooks/useSignUp"
import { AnimatePresence, motion } from "framer-motion"


const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignUp()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

  return (
    <form className='signup' onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label>E-mail:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}
            value = {email}
        ></input>
        <label>Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}
            value = {password}
        ></input>
        <button disabled={isLoading}>Sign Up</button>

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

export default SignUp