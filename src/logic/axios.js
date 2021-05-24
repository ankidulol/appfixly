import axios from 'axios';

export default process.env.NODE_ENV === 'development'
  ? axios.create({
      baseURL: 'http://localhost:3001/'
    })
  : axios.create({
      baseURL: 'https://appfixly.com/api/'
    });
