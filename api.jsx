import axios from 'axios';

const baseUrl='https://api.openweathermap.org/data/2.5/weather?'
const apiKey='cfbc2d2e3beaed834829aee5721d039b'
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