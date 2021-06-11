import axios from 'axios'

const instance = axios.create({
  baseURL: "https://binder-backend-node.herokuapp.com/",
});

export default instance;