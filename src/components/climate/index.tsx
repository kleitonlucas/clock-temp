import { useState } from "react";
import * as C from "./style";
import { Temp } from "../../types/Temp";

export const Climate = () => {
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState<Temp>({name:'',country:'',temp:'',tempIcon:'',windSpeed:'',humidity:''});
    const [displayInfo, setDisplayInfo] = useState('none');
    const [displayAlert, setDisplayAlert] = useState('none');
    const [msgAlert, setMsgAlert] = useState('');

    const showInfo = (searchCity: Temp) => {
        showWarning('');
        setDisplayInfo('flex');
        
        setCity(searchCity);
        
    }

    const showWarning = (msg: string) => {
        if(msg!==''){
            setDisplayAlert('flex');
            setDisplayInfo('none');
            setMsgAlert(msg);
        } else{
            setDisplayAlert('none');
        }
    }

    const handleSearch = async() => {
        let inputLocal = document.getElementsByTagName('input')[0].value;
        if(inputLocal !== ''){
            setLoading(true);
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(inputLocal)}&APPID={null}&units=metric&lang=pt_br`;
            setLoading(false);
            
            let results = await fetch(url);
            let json = await results.json();

            if(json.cod === 200){
                showInfo({
                    name: json.name,
                    country: json.sys.country,
                    temp: json.main.temp,
                    tempIcon: `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
                    windSpeed: json.wind.speed,
                    humidity: json.main.humidity
                });
            } else {
                showWarning("Localização não encontrada!");
            }
        } else {
            showWarning("Digite uma localização!");
        }
    }
    
    return (
        <C.Climate>
          <h2>
            Previsão do Tempo
          </h2>
          <input type="text" />
          <button onClick={handleSearch}>Buscar</button>
          <C.Info display={displayInfo}>
            <C.AreaLeft>
                <C.City>{city.name}, {city.country}</C.City>
                <C.Temp>
                    <C.TempTitle>Temperatura:</C.TempTitle>
                    <C.TempInfo>{city.temp}<sup>°</sup>C</C.TempInfo>
                </C.Temp>
                <C.Wind>
                    <C.WindTitle>Vento:</C.WindTitle>
                    <C.WindInfo>{city.windSpeed}<span>km/h</span></C.WindInfo>
                </C.Wind>
                <C.Humidity>
                    <C.HumidityTitle>Humidade do ar:</C.HumidityTitle>
                    <C.HumidityInfo>{city.humidity}%</C.HumidityInfo>
                </C.Humidity>
            </C.AreaLeft>
            <C.AreaRight>
                {<img src={city.tempIcon}/>}
            </C.AreaRight>
          </C.Info>
          <C.Alert display={displayAlert}>
              {msgAlert}
          </C.Alert>
        </C.Climate>
    );
}
