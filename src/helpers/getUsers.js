import axios from 'axios';


export const users = async (token) => {

  try {
    const data = await axios({
      method: 'get',
      url: 'https://mern-negozia.herokuapp.com/api/users/',
      headers: {
        'x-token': token
      }
    });
    return data;
  } catch (error) {
  }
}
