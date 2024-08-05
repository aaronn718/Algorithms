import { useState } from "react";


interface WeatherData {
    properties: {
        generatedAt: string,
        periods: {
            number: number,
            name: string
        }[]
    }
};
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
   
    const [data, setData] = useState<WeatherData | null>(null);

    const apiUrl = "https://api.weather.gov/gridpoints/TOP/31,80/forecast";
    
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
        <a href="https://api.weather.gov/gridpoints/TOP/31,80/forecast">Go here</a>
        <div>
            Result is: {data?.properties.generatedAt}
        </div>

        <button onClick={() => fetchData()}>Get Data</button>
        <p />
        <div>
            {
                if (data?.properties?.periods != null) {
                    <label>Day</label>
                }
            }
        </div>
    </div>
    </>
    );
}