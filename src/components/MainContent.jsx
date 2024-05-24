import {
  Button,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CardSetting } from "./CardSetting";

export const MainContent = (props) => {
  const { fetchWeathers, isLoading, showWeather, weatherData } = props;
  return (
    <Stack justify="center" align="center" minHeight="80vh" bg="BlackAlpha 100">
      
      <Button
        marginTop="20px"
        size="lg"
        boxShadow="md"
        bg="blue.100"
        fontSize="32px"
        borderRadius="10px"
        onClick={fetchWeathers}
      >
        いつがテニス日和？🌥️
      </Button>
      {isLoading && (
        <Stack alignItems="center" justifyContent="center">
          <Spinner size="xl" />
          <Text>Now Loading...</Text>
        </Stack>
      )}
      <CardSetting showWeather={showWeather} weatherData={weatherData} />
      <Text fontSize="3xl">このアプリの使いかた🎾🌦️</Text>
      <Text whiteSpace="pre-wrap" marginBottom="20px">
        ボタンを押すことにより埼玉県入間市における{"\n"}
        直近5日のテニスに最適な日付・時間のみの{"\n"}
        気象情報を教えてくれます。✨{"\n"}テニスに最適な気象かどうかは{"\n"}
        作成者の経験とChatGptの意見をもとに{"\n"}
        気象条件を得点化することで判定しています。👍
      </Text>
    </Stack>
  );
};
