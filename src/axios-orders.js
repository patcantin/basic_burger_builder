import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sourbox-c58f1.firebaseio.com/'
})

export default instance;
