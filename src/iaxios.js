import axios from 'axios';

// create axios instance for don't repeating base url and ensure set deafult middleware for authorization
const iaxios = axios.create({
  baseURL: 'https://622258b4666291106a24822e.mockapi.io/',
});

export default iaxios;
