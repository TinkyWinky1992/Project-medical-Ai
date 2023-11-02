//
import axios from 'axios'

export const test = async() => {
    const value = await axios.get('http://localhost:5000/users')
    console.log(value.data);
    return value;
}