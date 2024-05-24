import { Box, Flex, Heading } from "@chakra-ui/react"
import { GiTennisRacket } from "react-icons/gi"

export const Header=()=>{

    return(
        <Box bg="teal.500"  >
            <Flex alignItems="center"justify="center">
                <Heading color="white" size="lg" > Ideal Weather For Playing Tennis</Heading>
                <GiTennisRacket style={{ marginLeft: "0.5rem",fontSize: "1.5rem" ,color:"white"}} />
            </Flex>
        </Box>
    )
}