import axios from 'axios';

const production = true;

export default production
  ? axios.create({
      baseURL: 'http://appfixly.com/api/'
    })
  : axios.create({
      baseURL: 'http://localhost:3001/'
    });
