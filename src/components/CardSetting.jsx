import {
  Wrap,
} from "@chakra-ui/react";
import { WeatherCard } from "./WeatherCard";

export const CardSetting = (props) => {
  const { showWeather, weatherData } = props;

  return (
    <Wrap p={{ base: 4, md: 10 }}>
      {showWeather &&
        weatherData.map((data, index) => {
          let temperaturePoint = 0;
          let weatherPoint = 0;
          let speedPoint = 0;
          let humidityPoint = 0;
          const temp = data.main.temp;
          const humidity = data.main.humidity;
          const speed = data.wind.speed;
          const weather = data.weather[0].main;
          const date = new Date(data.dt_txt);
          //時間・月・日にちを得る
          const hours = date.getHours();
          //曜日を得る
          //温度による点数わけ
          if (15 <= temp && temp < 25) {
            temperaturePoint = +2;
          } else if ((10 <= temp && temp < 15) || (25 <= temp && temp <= 30)) {
            temperaturePoint = +1;
          }
          //天気による点数わけ
          if (weather === "Clouds") {
            weatherPoint = +2;
          } else if (weather === "Clear") {
            weatherPoint = +1;
          }
          //風による場合分け
          if (speed <= 5) {
            speedPoint = +1;
          }
          //湿度に寄る点数訳
          if (40 <= humidity && humidity < 60) {
            humidityPoint = +1;
          }
          const totalPoint =
            temperaturePoint + weatherPoint + speedPoint + humidityPoint;
          if (totalPoint >= 4 && (hours===9 || hours===12 || hours===15 ||hours===18)) {
            return (
              <WeatherCard index={index}data={data}totalPoint={totalPoint} temp={temp} humidity={humidity} speed={speed} date={date} hours={hours}/>
            );
          }
          return null;
        })}
    </Wrap>
  );
};
