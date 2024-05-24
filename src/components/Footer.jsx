import { Box, Flex,  Text,  } from "@chakra-ui/react"

export const Footer=()=>{
    return(
        <Box bg="gray.800" p={4} color="white" >
        <Flex  justify="center">
          <Text>
            Made with ❤️ by Jundai 
          </Text>
        </Flex>
      </Box>
    )
}