import { FC, useState } from "react";


interface WeatherData {
    properties?: {
        generatedAt: string,
        periods: WeatherPeriod[],
    }
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
   
    const [data, setData] = useState<WeatherData>();
    //const apiUrl = "https://api.weather.gov/gridpoints/TOP/31,80/forecast";
    //const apiUrl = "https://api.weather.gov/points/47.3359,-122.1754";
    const apiUrl = "https://api.weather.gov/gridpoints/SEW/127,54/forecast";
    
    const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          const result = await response.json();
          setData(result);
        
        } catch (error) {
          console.error('Error fetching data:', error);
          
        }
    };


    return(
        <>
    <div>
        Weather Page: Demo RESTFull Calls
        <a href="https://www.weather.gov/documentation/services-web-api">Go here</a>
        <div>
            Result is: {data?.properties?.generatedAt}
        </div>

        <button onClick={() => fetchData()}>Get Data</button>
        <p />
        <div>
           <WeatherDisplayData {...data}/>
            
        </div>
    </div>
    </>
    );
}
export const WeatherDisplayData: React.FC<WeatherData> = (props: WeatherData) => {
    let pData = null;
    if(props != null && props.properties?.periods != undefined)
    {
        //pData = props;
        pData = props.properties?.periods;
        console.log(pData.length + "is the length");
    }
    return(<>{pData != null ? (<>
        {pData.map((p) =><p> <img src={p.icon} /> <label>{p.name} is {p.temperature}&deg;{p.temperatureUnit}</label>
        
        </p>)}
       </>) 
        : (<label>Nothing to display</label>)}
        </>);
}