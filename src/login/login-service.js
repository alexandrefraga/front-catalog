import axios from 'axios';

export async function doLogin(data) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, { ...data });
    console.log(response.data);
    return response.data;
}