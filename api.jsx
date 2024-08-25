import axios from 'axios';

const baseUrl='https://api.openweathermap.org/data/2.5/weather?'
const apiKey=import.meta.env.VITE_API_KEY
const getWeatherData= async (cityname)=>{
  try{
    const {data}= await axios.get(baseUrl+`q=${cityname}&appid=${apiKey}`)
    return data
  }
  catch(error){
    throw error;
  }
}
export default getWeatherData
