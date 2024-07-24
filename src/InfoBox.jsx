import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import CloudIcon from '@mui/icons-material/Cloud';
import WindPowerIcon from '@mui/icons-material/WindPower';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

export default function InfoBox({info}){

    let Rain_IMG = "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202308/ezgif-sixteen_nine_95.jpg"
    let Cold_IMG = "https://www.safarmentor.com/blog/wp-content/uploads/2022/10/shimla-winter.jpg"
    let Sunny_IMG = "https://cdn.romania-insider.com/sites/default/files/styles/article_large_image/public/featured_images/sunny-sxc.jpg"
    return (
        <Card sx={{ width: 500 , height: 550 }}>
        <CardMedia
          sx={{ height: 180  }}
          image = {info.humidity > 50 ? Rain_IMG : info.temp > 25 ? Sunny_IMG : Cold_IMG }
          title="Image"
        />
        <CardContent> 
          <Typography gutterBottom variant="h5" component="div">
          <h5 className='Location' >{info.location+", "+ info.country}</h5>
         <div className='WeatherCondition'>
         {info.humidity > 50 ? <UmbrellaIcon  fontSize="large" /> : info.temp > 25 ? <WbSunnyIcon fontSize="large"  /> : <AcUnitIcon fontSize="large" /> }
         {info.humidity > 50 ? "Rainy" : info.temp > 25 ? "Sunny" : "Cold" } &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <i>  {info.condition}</i>
         </div>
          </Typography>
          <Typography variant="body2"  component={"span"} >
          <span><b>Weather Info:-</b></span>
            <div className='StyleContainer'>
              <div className='ContainerLine'>
              <div className='IndividualContainer'>
                <DeviceThermostatIcon/>
                <span>{info.temp}&deg;C </span>
              </div>

              <div className='IndividualContainer'>
                <DeviceThermostatIcon/>
                <span>{info.temp_f}&deg;F<i> farahneit</i></span>
              </div>
              </div>


              <div className='ContainerLine'>
              <div className='IndividualContainer'>
                <WaterDropIcon/>
                <span>{info.humidity} <i>Humidity</i></span>
              </div>

              <div className='IndividualContainer'>
                <SentimentVerySatisfiedIcon/>
                <span> &nbsp;{info.feelslike} <i>feels-like</i></span>
              </div>
              </div>

              <div className='ContainerLine'>
              <div className='IndividualContainer'>
                <CloudIcon/>
                <span>&nbsp;{info.Clouds}% <i>Cloudy</i></span>
              </div>

              <div className='IndividualContainer'>
                <WindPowerIcon/>
                <span>   {info.wind_kph} <i>wind_kph</i></span>
              </div>
              </div>

            </div>
          </Typography>
        </CardContent>
      </Card>
  
    )
}