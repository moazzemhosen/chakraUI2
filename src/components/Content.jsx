import React from 'react'
import { Flex, Text, Input, Box,Stack,Button  } from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons';

const Content = () => {
  return (
    <Flex direction={"column"} alignItems={"center"} p={"60px 5px 10px 5px"}>
      <Text fontSize="60px" fontWeight={"bold"}>
        Find The Right
      </Text>
      <Text fontSize="60px" fontWeight={"bold"}>
        <span style={{ color: "blue" }}>Four-Day</span> Week Job
      </Text>
      <Box>
        <Input
          size="md"
          width={"350px"}
          m={"auto"}
          boxShadow={
            "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
          }
          placeholder="Here is a sample placeholder"
        />
        <Search2Icon />
      </Box>
      <Stack direction="row" spacing={4} align="center" marginTop={"20px"}>
        <Button colorScheme="blue" variant="solid">
          Remote
        </Button>
        <Button colorScheme="blue" variant="solid">
        Tech 
        </Button>
        <Button colorScheme="blue" variant="solid">
         Marketing
        </Button>
      </Stack>
    </Flex>
  );
}

export default Content