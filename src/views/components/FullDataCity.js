// Affiche toutes les données concernant une ville

import { h } from 'hyperapp'
import HourlyRainChart from './HourlyRainChart'
import RainChart from './RainChart'
import PreviousForecast from './PreviousForecastChart';

const FullDataCity = (props) => {
  console.log(props.cityId)
	return (
		<div>
    	{props.savedCities.filter(city => city.id == props.cityId).map(city =>
				<div class="fullPage">
        {console.log(city.previousForecast)}
	    	  <div class="fullDataCity">
	          <div class="header">
	            <div class="picture">
	              <img class="icon" src={city.iconPath}/>
	            </div>
	            <div class="info">
	              <div class="city">
	                <div class="name">
	                  {city.name}
	                </div>
	                <div class="temperature">
	                  {city.temperature}°C
	                </div>
	              </div>
	              <div class="resume">
	                <p>{city.summary}</p>
                  <div class="update">
									  <p>Dernière mise à jour : {city.time}</p>
                  </div>
	              </div>
	            </div>
	          </div>
						<div class="details">
		          <div class="leftData">
		            <div class="humidity">
		              <img class="smallicon" src="../../img/humidity.png"/>
                  <div class="currentData">
                    <div class="currentDataTitle">
							        <p>Humidité</p>
                    </div>
                    <div class="currentDataValue"> 
                      <p>{city.humidity}%</p>
                    </div>  
                  </div>
		            </div>
		            <div class="windspeed">
		              <img class="smallicon" src="../../img/windspeed.png"/>
                  <div class="currentData">
                    <div class="currentDataTitle">
							        <p>Vitesse du vent</p>
                    </div>
                    <div class="currentDataValue">
                      <p>{city.windSpeed} km/h</p>
                    </div>
                  </div>
		            </div>
		            <div class="dawn">
		              <img class="smallicon" src="../../img/dawn.png"/>
                  <div class="currentData">
                    <div class="currentDataTitle">
							        <p>Lever</p>
                    </div>
                    <div class="currentDataValue">
                      <p>{city.sunriseTime}</p>
                    </div>  
                  </div>
		            </div>
		            <div class="dusk">
		              <img class="smallicon" src="../../img/dusk.png"/>
							    <div class="currentData">
                    <div class="currentDataTitle">
                      <p>Coucher</p>
                    </div>
                    <div class="currentDataValue">
                      <p>{city.sunsetTime}</p>
                    </div>  
                  </div>
		            </div>
		          </div>
							<div class="rain">
                <div class="rainData">
                  <img class="umbrella" src="../../img/umbrella.png"/>
                  <p>{city.precipProbability}%</p>
                </div>
                <div class="rainChart">
								  <RainChart precipProbability={city.precipProbability}></RainChart>
                </div>  
							</div>
						</div>
					</div>
          <div class="chartContainer">
            <div class="titreGraphe">
              <p>Risque de pluie dans les prochaines heures (en %)</p>
					  </div>
            <HourlyRainChart hourlyData={city.hourlyPrecipProbability}></HourlyRainChart>
          </div>
          <div class="chartContainer">
            <div class="titreGraphe">
              <p>Evolution de la température sur les dix dernières années (en °C)</p>
            </div>
            <PreviousForecast previousForecast={city.previousForecast}></PreviousForecast>  
          </div>  
				</div>
      )}
    	</div>

	)
}

export default FullDataCity
