import React, { useState } from 'react'
import { Form,Button,Breadcrumb } from 'react-bootstrap'
import toast from 'react-hot-toast'
import axios from 'axios'
import config from '../config'
import ApiRoutes from '../ApiRoutes'

function App() {

  let [token,setToken] = useState("")
  let [newPassword,setnewPassword] = useState("")

  const reset = async() => {
    try{
      let response = await axios.post(`https://hotel-booking-be-2-9hoy.onrender.com/user/reset`,{
        token,
        newPassword
      })
      if(response.status===201)
      toast.success(response.data.message)
    }
    catch(error){
      toast.error(error.response.data.message)
    }
  }
  return <>
    <div className='container'>
      <Form>

        <Form.Group className="mb-3">
        <Form.Label>Token</Form.Label>
        <Form.Control type="email" placeholder="Enter your token" onChange={(e)=> setToken(e.target.value)}/>
      </Form.Group>

       <Form.Group className="mb-3">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="password" placeholder="Enter New Password" onChange={(e)=> setnewPassword(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={()=>reset()} >
       Reset
      </Button>
      <Breadcrumb>
      <Breadcrumb.Item href="https://main-booking.netlify.app">Click Here</Breadcrumb.Item><span>&nbsp;</span>To Login with your New Password<span></span>
      </Breadcrumb>
    </Form>
      </div>

      {/* <div className='mt-52 container'>
        <h4 >You will be redirected to Login page once the new password is set</h4>
      </div> */}
  </>
}

export default App
