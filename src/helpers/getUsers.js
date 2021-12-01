import axios from 'axios';

export const users = async() => {

  try {
    const data = await axios({
     method: 'get',
     url: 'http://localhost:4000/api/users/',
     //url: `https://mern-negozia.herokuapp.com/api/users`,
     headers: {
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTllY2UzNThjYTQ0ZjJmZmY3OTk2ZTkiLCJuYW1lIjoiRGFuaWVsIiwiaWF0IjoxNjM4MzY2MDY0LCJleHAiOjE2Mzg0MDkyNjR9.iQas12_7z68UfExSSNVSaHokpezmDSmcH0_cmFVywX4'
     }
   });
   return data;
  }catch(error){
    console.log(error)
  }
     
   }
