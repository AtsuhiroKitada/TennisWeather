import { Box, Flex, Image, Stack, Text, useBreakpointValue, WrapItem } from "@chakra-ui/react"
import { FaRegCircle } from "react-icons/fa"
import { GrEmptyCircle } from "react-icons/gr"

export const WeatherCard=(props)=>{
    const shouldDisplayComponent = useBreakpointValue({ base: false, md: true });
    const {index,data,totalPoint,temp,humidity,speed,date,hours}=props
    
    //月・日にちを得る
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    //曜日を得る
    const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
    const weekdayIndex = date.getDay();
    const weekday = weekdays[weekdayIndex];
    const flagStyle = {
      fontSize: "1.5rem",
      color: "red"
    };

    return(
        <WrapItem>
        <Box
          w="175px"
          h="175px"
          bg="white"
          borderRadius="10px"
          shadow="md"
          p={4}
          _hover={{ cursor: "pointer", opacity: 0.8 }}
          key={index}
        >
          <Stack>
            <Flex alignItems="center" >
              <Text>{`${month}/${day}(${weekday})${hours}:00~`}</Text>
            </Flex>
            <Flex alignItems="center" justifyContent="center">
            {totalPoint === 4 ? <FaRegCircle style={flagStyle} /> : <GrEmptyCircle style={flagStyle}/>}
              
            </Flex>
            <Flex alignItems="center" justifyContent="center">
              <Image
                width="100px"
                height="100px"
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="weathericon"
              />
              <Stack>
                <Text>{`${temp}℃`}</Text>
                {shouldDisplayComponent&&<Text>{`${humidity}%`}</Text>}
                <Text>{`${speed}m/s`}</Text>
              </Stack>
            </Flex>
          </Stack>
        </Box>
      </WrapItem>
    )
}