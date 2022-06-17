import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { commerce } from '../commerce/commerce';

const Login = () => {

  const navigate = useNavigate()
  const { loginID } = useParams()

  const onLogin = () => {

    try {

      commerce.customer.getToken(loginID)

      navigate('/profile')
      
    } catch (error) {

      console.log(error);
    
    }

  }

  useEffect(() => {
    onLogin()
  }, {loginID})


  return (
    <div>

    </div>
  )
}

export default Login