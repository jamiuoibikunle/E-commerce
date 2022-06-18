import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { commerce } from '../commerce/commerce';

const Login = () => {

	const navigate = useNavigate()
	const { loginID } = useParams()

	useEffect(() => {
		const onLogin = () => {
			try {
				commerce.customer.getToken(loginID)
				navigate('/orders')
			} catch (error) {
				console.log(error);
			}
		}
		onLogin()
	}, {loginID})
}

export default Login