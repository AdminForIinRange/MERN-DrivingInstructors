import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  HStack,
  InputGroup,
  Input,
  Button,
  ButtonGroup,
  Wrap,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import SeaNSun from "../../../assets/Images/SeaNsun.png";

export default function Header() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const backgroundImageUrls = {
    base: "https://source.unsplash.com/white-boat-on-sea-under-white-sky-during-daytime-TCbNpCEq4W4",
    xsm: "https://source.unsplash.com/white-boat-on-sea-under-white-sky-during-daytime-TCbNpCEq4W4",
    ssm: "https://source.unsplash.com/white-boat-on-sea-under-white-sky-during-daytime-TCbNpCEq4W4",
    sm: "https://source.unsplash.com//white-swan-on-blue-sea-during-daytime-Zn0OvfhhDQ4",
    md: "https://source.unsplash.com/view-of-mountaintops-with-clouds-Wl7ZewvzIb0",
    lg: "https://source.unsplash.com//tilt-lens-photography-of-string-lights-under-cloudy-skies-78Fr6nZRDIc",
    xl: SeaNSun,
    xxl: SeaNSun,
  };

  const buttonData = [
    "Performance Tuning/Racing Services",
    "Rental",
    "Instruction/Training",
    "Vehicle Restoration",
    "Parts/Accessories Sales",
    "Detailing /Cleaning",
  ];

  return (
    <>
      <Box
        bg={"#D2E0FB"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundImage={backgroundImageUrls}
        backgroundSize={{
          base: "100%",
          xsm: "200%",
          ssm: "100%",
          sm: "100%",
          md: "100%",
          lg: "130%",
          xl: "130%  ",
          xxl: "110%",
        }}
        boxShadow={"0px  0px 15px rgb(0,0,0)"}
        m={"1% 2.5%"}
        w={"95%"}
        borderRadius={"20px"}
        p={"2% 10%"}
      >
        <HStack justify={"center"}>
          <Text
            whiteSpace={{
              base: "wrap",
              xsm: "wrap",
              ssm: "nowrap",
              sm: "nowrap",
              md: "nowrap",
              lg: "nowrap",
              xl: "nowrap",
              xxl: "nowrap",
            }}
            transition="transform, 0.3s ease-in-out"
            fontSize={{
              base: "40px",
              xsm: "50px",
              ssm: "26px",
              sm: "33px",
              md: "35px",
              lg: "50px",
              xl: "60px",
              xxl: "75px",
            }}
            fontFamily={"Raleway"}
            color={"teal"}
            p={"0% 3%"}
          >
            <div class="animate__animated animate__fadeInDown animate__slow">
              <h1> Elevating Your Automotive Experience.</h1>
            </div>
            <span
              style={{
                color: "#5271FF",
                textShadow: "0px  0px 5px rgb(82, 113, 255)",
              }}
            >
              {" "}
            </span>{" "}
          </Text>
        </HStack>

        <span class="animate__animated animate__fadeInDown animate__slow">
          <HStack
            mt={"2%"}
            justify={"center"}
            transition="transform, 0.3s ease-in-out"
          >
            <InputGroup
              transition="transform, 0.3s ease-in-out"
              p={"0% 3%"}
              w={{
                base: "450px",
                xsm: "500px",
                ssm: "600px",
                sm: "600px",
                md: "600px",
                lg: "600px",
                xl: "800px",
                xxl: "800px",
                xxxl: "800px",
              }}
            >
              <Input
                boxShadow={"0 0 10px 1px teal"}
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  boxShadow: "0 0 50px 1px teal",
                }}
                type="tel"
                value={inputValue}
                onChange={handleInputChange}
                focusBorderColor="#319795"
                placeholder="Search for a Service"
                fontSize={{
                  base: "11px",
                  xsm: "10px",
                  ssm: "15px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "20px",
                  xxl: "20px",
                  xxxl: "20px",
                }}
                h={{
                  base: "40px",
                  xsm: "40px",
                  ssm: "40px",
                  sm: "40px",
                  md: "40px",
                  lg: "40px",
                  xl: "50px",
                  xxl: "50px",
                  xxxl: "50px",
                }}
                borderColor={"#4FD1C5"}
              />

              <Button
                boxShadow={"0 0 10px 1px teal"}
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  boxShadow: "0 0 20px 1px teal",
                }}
                h={{
                  base: "40px",
                  xsm: "40px",
                  ssm: "40px",
                  sm: "40px",
                  md: "40px",
                  lg: "40px",
                  xl: "50px",
                  xxl: "50px",
                  xxxl: "50px",
                }}
                colorScheme="teal"
                w={"50px"}
                ml={"10px"}
              >
                <Search2Icon />
              </Button>
            </InputGroup>
          </HStack>
        </span>

        <HStack
          justify={"center"}
          mt={"2%"}
          mb={"5%"}
          transition="transform, 0.3s ease-in-out"
        >
          <ButtonGroup transition="transform, 0.3s ease-in-out">
            <Text
              fontSize={"30px"}
              fontWeight={"700"}
              color={"#373535"}
              mr={"2%"}
            ></Text>

            <Wrap
              onClick={(event) =>
                handleInput(event, setInputValue(event.target.value))
              }
            >
               {buttonData.map((buttonText, index) => (
            <Button
              key={index}
              value={buttonText}
              transition="transform, 0.3s ease-in-out"
              p={{ base: "15px", xsm: "15px", ssm: "15px", sm: "20px", md: "20px", lg: "20px", xl: "20px", xxl: "20px" }}
              fontSize={{ base: "10px", xsm: "10px", ssm: "10px", sm: "15px", md: "15px", lg: "15px", xl: "15px", xxl: "15px" }}
              colorScheme="teal"
              variant="outline"
              size="sm"
            >
              {buttonText}
            </Button>
          ))}
            </Wrap>
          </ButtonGroup>
        </HStack>
      </Box>
    </>
  );
}
