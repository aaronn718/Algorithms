import { useState } from "react";


interface DisplayWeatherData{
    message: string,
    data?: WeatherData
}
interface WeatherData {
    properties?: {
        generatedAt: string,
        periods: WeatherPeriod[],
    },
}

interface WeatherPeriod
{
    number: number,
    name: string,
    temperature: number,
    temperatureUnit: string,
    icon: string
}
export const WeatherPage = () => {
    /*
https://www.weather.gov/documentation/services-web-api
example: https://api.weather.gov/gridpoints/TOP/31,80/forecast
"properties": {
"generatedAt": "2024-08-03T16:15:56+00:00",
        "updateTime": "2024-08-03T15:12:17+00:00",
         "periods": [
            {
                "number": 1,
                "name": "Today",
                "startTime": "2024-08-03T11:00:00-05:00",
                "endTime": "2024-08-03T18:00:00-05:00",
                "isDaytime": true,
                "temperature": 92,
                "temperatureUnit": "F",
                "temperatureTrend": "",
                "probabilityOfPrecipitation": {
                    "unitCode": "wmoUnit:percent",
                    "value": null
                },
                "windSpeed": "5 mph",
                "windDirection": "SW",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "shortForecast": "Mostly Sunny",
                "detailedForecast": "Mostly sunny, with a high near 92. Southwest wind around 5 mph."
            },...


    */
   
    //const [data, setData] = useState<WeatherData>();
    const [data, setData] = useState<DisplayWeatherData>({message: "Click Fetch Weather"});

    //const apiUrl = "https://api.weather.gov/gridpoints/TOP/31,80/forecast";
    //const apiUrl = "https://api.weather.gov/points/47.3359,-122.1754";
    const apiUrl = "https://api.weather.gov/gridpoints/SEW/127,54/forecast";
    
    const fetchData = async () => {
        try {
            setData({message: "Loading...."}); //show loading message
          const response = await fetch(apiUrl);
          const result = await response.json();

          setData({message: "Today's Weather Report", data: result});
        
        } catch (error) {
          console.error('Error fetching data:', error);
          setData({message: 'Error fetching data:' + error}); //show loading message
        }
    };


    return(
        <>
    <div>
        Weather Page: Demo RESTFull Calls
        <a href="https://www.weather.gov/documentation/services-web-api">Go here for document</a>
        <button onClick={() => fetchData()}>Get Weather</button>
        <p />
        <div>
           <WeatherDisplayData {...data}/> {/*spread data out */}
        </div>
    </div>
    </>
    );
}
export const WeatherDisplayData = (props: DisplayWeatherData) => {
    let pData = null;
    if(props.data != null && props.data?.properties?.periods != undefined)
    {
        pData = props.data.properties?.periods;
        
    }

    return(<>{pData != null ? (<>
        {
        pData.map((p) =><p> <img src={p.icon} /> <label>{p.name} is {p.temperature}&deg;{p.temperatureUnit}</label>
        </p>)}
       </>) 
        : (<label>{props.message}</label>)}
        </>);
}