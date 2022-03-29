import axios from "axios";

// create axios instance for don't repeating base url and ensure set deafult middleware for authorization
const iaxios = axios.create({
  baseURL: "http://blog",
});

export default iaxios;
