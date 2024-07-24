import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './searchBox.css'
import img from  './assets/clouds.png'



export default function SearchBox({WeatherDetails}){
    let [City, setCity] = useState("");
    let [Error, setError] = useState(false);

    let API_KEY = "f1eca83df8d548f8b0f142728242107";
    let URL = "http://api.weatherapi.com/v1/current.json";

   async function GetWeatherInfo(){
       try{
        let response = await fetch(`${URL}?key=${API_KEY}&q=${City}`)
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = { 
            location : jsonResponse.location.name,
            country : jsonResponse.location.country,
            temp : jsonResponse.current.temp_c,
            temp_f :jsonResponse.current.temp_f,
            humidity : jsonResponse.current.humidity,
            feelslike : jsonResponse.current.feelslike_c,
            Clouds : jsonResponse.current.cloud,
            condition :  jsonResponse.current.condition.text,
            wind_kph :  jsonResponse.current.wind_kph,
            Show : true
        }
        return result;
    }catch(err){
        throw err;
    }
    }

    function HandleChange(event){
        setCity(event.target.value);
    }

   async function HandleSearch(event){
        try{
        event.preventDefault();
        let weatherData = await GetWeatherInfo();
        setCity("");
        WeatherDetails(weatherData);
        }catch(err){
        setError(true);
        }

    }

    return(
        <div>

    <Card sx={{ width: 400 , height: 400 }} >
      
      <h2>Ultimus Live Weather </h2>
      <div className="Image">
            <img src={img} alt="image" />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Find Weather of your city
          </Typography>
          <Typography variant="body2" color="text.secondary">
                  <TextField id="City" size="small" label="City" variant="outlined" value={City} onChange={HandleChange} required/>
                  <Button variant="contained"  onClick={HandleSearch}>Search</Button>
          </Typography>
        </CardContent>
    </Card>

            <br />
            {Error && <p>No such place Exists in our data</p>}
        </div>
    )
}