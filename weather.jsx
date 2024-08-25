import React,{ useState,useEffect } from "react"
import getWeatherData from "./api"
import photo from "./assets/search.png"
import sun from "./assets/sunny.png"
import humid from "./assets/weather.png"
import wind from "./assets/wind.png"
import cloud from "./assets/clouds.png"
import drizzle from "./assets/cloudy.png"
import rain from "./assets/rainy-day.png"
import snow from "./assets/snow.png"
function Weather(){
    const [weather,setWeather]=useState(null)
    const[city,setCity]=useState("Bangalore")
    const icons={
        "01d": sun,
        "01n": sun,
        "02d": cloud,
        "02n": cloud,
        "03d": cloud,
        "03n": cloud,
        "04d": drizzle,
        "04n": drizzle,
        "09d": rain,
        "09n": rain,
        "10d": rain,
        "10n": rain,
        "13d":snow,
        "13n":snow
    }
    const getData= async ()=>{
        try{
            const data= await getWeatherData(city)
            setWeather(data)
            console.log(data)
        }
        catch(error){
            console.log(error.message)
        }
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <div className="container">
            <div className="app">
                <div className="searchbar">
                    <input type="text" className="text" placeholder="Search" onChange={(e)=>setCity(e.target.value)}/><button className="icon" onClick={()=>getData()}><img src={photo} className="search"/></button>
                </div>
                {weather != null? (
                    <>
                    <img src={icons[weather.weather[0].icon] || sun} className="sun"/>
                    <div className="result">
                        <p className="climate">{weather.weather[0].description}</p>
                        <p className="deg">{parseFloat(weather.main.temp-273.15).toFixed(1)}&deg;C</p>
                        <p className="city">{weather.name}</p>
                    </div>
                    <div className="foot">
                        <div className="humid">
                            <img src={humid}/><p><strong>{weather.main.humidity} &#37;<br />Humidity</strong></p>
                        </div>
                        <div className="wind">
                        <img src={wind}/><p><strong>{weather.wind.speed} Km/h<br />Wind Speed</strong></p>
                        </div>
                    </div>
                    </>
                ) : null}
                
            </div>
        </div>
    )
}
export default Weather