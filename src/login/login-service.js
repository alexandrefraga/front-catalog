import axios from 'axios';

export async function doLogin(data) {
    const response = await axios.post('http://localhost:3001/login', { ...data });
    console.log(response.data);
    return response.data;
    // throw new Error('service is not implemented')
}