import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import axios from "axios";
import { useState } from "react";
import { MainContent } from "./components/MainContent";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [showWeather, setShowWeather] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const fetchWeathers = async () => {
    setIsloading(true);
    const result = await axios.get(BASE_URL, {
      params: {
        q: "Iruma",
        units: "metric",
        appid: API_KEY,
      },
    });
    setIsloading(false);
    setWeatherData(result.data.list);
    setShowWeather(true);
  };
  return (
    <ChakraProvider>
      <Header />

      <MainContent
        fetchWeathers={fetchWeathers}
        isLoading={isLoading}
        showWeather={showWeather}
        weatherData={weatherData}
      />
      <Footer />
    </ChakraProvider>
  );
}
export default App;
