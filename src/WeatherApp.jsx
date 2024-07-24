import SearchBox from './searchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';


export default function WeatherApp(){
   let [WeatherInfo, setWeatherInfo] =  useState({ 
    location :"Delhi",
    country : "",
    temp : 20,
    temp_f : 220,
    humidity : 50,
    feelslike : "",
    Clouds : "",
    condition : "",
    wind_kph: "",
    Show : false
})

function UpdatedInfo(weatherData){
  setWeatherInfo(weatherData);
};

    return (
        <div>
            {
               WeatherInfo.Show ? 
               (<InfoBox info={WeatherInfo}  />)
               :
            (<SearchBox WeatherDetails={UpdatedInfo} />)
        
            }
        </div>
    )
}