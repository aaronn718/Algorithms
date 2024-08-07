import { useState } from "react";
import {Row, Col, Button} from "antd"
//using ant design for grid https://ant.design/docs/react/introduce


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
    shortForecast: string,
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
    const [data, setData] = useState<DisplayWeatherData>({message: "Click: Get Weather"});

    //const apiUrl = "https://api.weather.gov/gridpoints/TOP/31,80/forecast";
    //const apiUrl = "https://api.weather.gov/points/47.3359,-122.1754";
    const apiUrl = "https://api.weather.gov/gridpoints/SEW/127,54/forecast";
    
    const fetchData = async () => {
        try {
            setData({message: "Loading...."}); //show loading message
          const response = await fetch(apiUrl);
          const result = await response.json();

          setData({message: "Please wait while loading today's Weather Report...", data: result});
        
        } catch (error) {
          console.error('Error fetching data:', error);
          setData({message: 'Error fetching data:' + error}); //show loading message
        }
    };


    return(
        <>
    <div>
        <h1>Weather Page: Demo RESTFull Calls</h1>
        <div>
            <a href="https://www.weather.gov/documentation/services-web-api">Go here for document</a>
        </div>
        <div>
            <p />
            <Button type="primary" onClick={() => fetchData()}>Get Weather</Button>
        </div>
        <p />
        <div>
           <WeatherCube {...data}/> {/*spread data out */}
        </div>
    </div>
    </>
    );
}
export const WeatherCube = (props: DisplayWeatherData) => {
    let pData = null;
    if(props.data != null && props.data?.properties?.periods != undefined)
    {
        pData = props.data.properties?.periods;
        
    }

    return(<>{pData != null ? (<>
        {
            <div style={{width: "1000px"}}>
                <Row gutter={[24, 24]} align={"middle"}>               
                {
                    /*https://ant.design/components/grid*/
                    pData.map((p) =><Col span={12}><div id="content"><img src={p.icon} style={{borderRadius:"50%"}} /> <label>{p.name} is {p.temperature}&deg;{p.temperatureUnit} - {p.shortForecast}</label></div></Col>)
                }
            </Row>
            </div>
        }
       </>) 
        : (<label>{props.message}</label>)}
        </>);
}