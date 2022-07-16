import { Box, Stack, Flex, Button } from "@chakra-ui/react";
import React from 'react'

const Navbar = () => {
  return (
    <Flex justifyContent={"space-between"} p={"10px 5px"}>
      <Box>
        {" "}
        <img
          height="50px"
          width={"50px"}
          src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"
          alt=""
        />
      </Box>
      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="blue" variant="ghost">
          Sign In
        </Button>
        <Button colorScheme="blue" variant="outline">
          Sign Up
        </Button>
        <Button colorScheme="blue" variant="solid">
          Post a Job
        </Button>
      </Stack>
    </Flex>
  );
}

export default Navbar