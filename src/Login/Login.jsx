import React, { useState } from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

const Login = () => {

  const [userInfo, setUserInfo] = useState({
    name: "",
    lastname: "",
    email: "",
    password: ""
  })

  const submituser = () => {
    checkFields()
  }

  const userchange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setUserInfo({ ...userInfo, [name]: value })
  }

  const checkFields = () => {
    if (!userInfo.name || !userInfo.email || !userInfo.lastname || !userInfo.password) {
      alert("all fields required")

    }
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
  }
  return (

    <div className='main_login_div'>

      <div className="login_detail">

        <div>
          <span> LogIn </span>
        </div>

        <div className="input_fields">

          <input type="text" name="name" value={userInfo.name} placeholder='Enter your name' onChange={userchange} required />
          <input type="text" name="lastname" value={userInfo.lastname} placeholder='Enter your last name' onChange={userchange} required />
          <input type="eamil" name="email" value={userInfo.email} placeholder='Enter your email' onChange={userchange} required />
          <input type="password" name="password" value={userInfo.password} placeholder='Enter your password' onChange={userchange} required />

        </div>

        <div>
          <button onClick={submituser} type='submit' onSubmit={submituser}>
            <Link to="/test">Login</Link>
          </button>
        </div>

      </div>

    </div>
  )
}

export default Login
