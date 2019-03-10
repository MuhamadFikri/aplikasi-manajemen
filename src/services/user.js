//import config from '../config';
import axios from 'axios'

export const login = async (email, password) => {
	try {
		const res = await axios.post('http://localhost:3000/login', {
			email,
			password
		})
		return res
	} catch (e) {
		throw e
	}
}