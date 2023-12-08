import {
  Flex,
  Button,
  Box,
  useBreakpointValue,

  Wrap,

  Text,
 
  HStack,
  Heading,

  Divider,
 
  Center,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


import "./Home.css";

import {

  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { useState, useEffect } from "react";

import Header from "./components/Header";
import Collage from "./components/Collage";
import NavBox from "./components/NavBox";
import MiddleContent from "./components/MiddleContent";
import PostMar from "./components/PostMar";
import Vid from "./components/Vid";
import ProviderReviewsMar from "./components/ProviderReviewsMar";
import CustomersReviewsMar from "./components/CustomersReviewsMar.jsx";

export default function home() {
 
  return (
    <>
    <Header />
      

      <Collage />

      <NavBox />

      
   
      <Box position="relative" padding="10" >
        <Divider borderWidth={"1.5px"} w={"90%"} />
        <HStack
          fontFamily={"Raleway"}
          fontSize={{ base: "25px", xsm: "25px", ssm: "35px", sm: "40px" }}
          fontWeight={"bold"}
          color={"balck"}
          px="4"
        >
          <Text>Unity Empowers</Text>
        </HStack>
      </Box>

      <MiddleContent />

      


      <PostMar />

      <Box position="relative" padding="10" >
        <Divider borderWidth={"1.5px"} w={"90%"} />
        <HStack
          fontFamily={"Raleway"}
          fontSize={{ base: "25px", xsm: "25px", ssm: "35px", sm: "40px" }}
          fontWeight={"bold"}
          color={"balck"}
          px="4"
        >
          <Text>Little About Us</Text>
        </HStack>
      </Box>
      <Vid />

      <ProviderReviewsMar />

 
      <CustomersReviewsMar />



     

      <Center>
        <Divider
          borderWidth={"1.5px"}
          w={"90%"}
          mt={{
            base: "5%",
            xsm: "10%",
            ssm: "8%",
            sm: "8%",
            md: "5%",
            lg: "2%",
            xl: "2%",
            xxl: "2%",
            xxxl: "2%",
          }}
        />
      </Center>

      <HStack bgColor={"gray.200"} p={"2% 0%"} justify={"center"} mt={"20px"} align={"start"} >
        <Box w={"95%"} h={"100%"} borderRadius={"10px"} >
          <HStack
            wrap={{
              base: "wrap",
              xsm: "wrap",
              ssm: "wrap",
              sm: "wrap",
              md: "wrap",
              lg: "wrap",
              xl: "nowrap",
              xxl: "nowrap",
              xxxl: "nowrap",
            }}
            justify={"center"}
            mt={"10px"}
            className="NavBar"
            mb={"20px"}
          >
            <NavLink to="/">
              <Button fontSize="lg" color={"Black"} variant="ghost" w="auto">
                Main
              </Button>
            </NavLink>
            <NavLink to="Services">
              <Button fontSize="lg" color={"Black"} variant="ghost" w="auto">
                Services
              </Button>
            </NavLink>
            <NavLink to="Login/Signup">
              <Button fontSize="lg" color={"Black"} variant="ghost" w="auto">
                Login
              </Button>
            </NavLink>
            <NavLink to="About">
              <Button fontSize="lg" color={"Black"} variant="ghost" w="auto">
                About
              </Button>
            </NavLink>
            <NavLink to="Dashboard">
              <Button fontSize="lg" color={"Black"} variant="ghost" w="auto">
                Dashboard
              </Button>
            </NavLink>
            <NavLink to="Account">
              <Button fontSize="lg" color={"Black"} variant="ghost" w="auto">
                Account
              </Button>
            </NavLink>
          </HStack>

          <HStack
            justify={"center"}
            align={"start"}
            wrap={{
              base: "wrap",
              xsm: "wrap",
              ssm: "wrap",
              sm: "wrap",
              md: "wrap",
              lg: "wrap",
              xl: "nowrap",
              xxl: "nowrap",
              xxxl: "nowrap",
            }}
          >
            <Box
              width={{
                base: "200px",
                xsm: "350px",
                ssm: "400px",
                sm: "400px",
                md: "400px",
                lg: "400px",
                xl: "400px",
                xxl: "400px",
                xxxl: "400px",
              }}
              height={{
                base: "200px",
                xsm: "190px",
                ssm: "200px",
                sm: "200px",
                md: "200px",
                lg: "210px",
                xl: "210px",
                xxl: "210px",
                xxxl: "210px",
              }}
              borderRadius="10px"
              backgroundColor="gray.100"
              p="20px"
            >
              <Box>
                <Heading as="h2" fontWeight="bold">
                  Contact
                </Heading>
                <Divider my="20px" />
                <Text
                  fontWeight={"500"}
                  fontSize={{
                    base: "14px",
                    xsm: "14px",
                    ssm: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "16px",
                    xxl: "16px",
                    xxxl: "16px",
                  }}
                >
                  Phone: 123-456-789 <br />
                  Email: info@yourcompany.com <br />
                  Address: 123 Main Street, City, State
                </Text>
              </Box>
            </Box>

            <Box
              width={{
                base: "200px",
                xsm: "350px",
                ssm: "400px",
                sm: "400px",
                md: "400px",
                lg: "400px",
                xl: "400px",
                xxl: "400px",
                xxxl: "400px",
              }}
              height={{
                base: "200px",
                xsm: "190px",
                ssm: "200px",
                sm: "200px",
                md: "200px",
                lg: "210px",
                xl: "210px",
                xxl: "210px",
                xxxl: "210px",
              }}
              borderRadius="10px"
              backgroundColor="gray.100"
              p="20px"
            >
              <Box>
                <Heading as="h2" fontWeight="bold">
                  Follow Us
                </Heading>
                <Divider my="20px" />
                <Text
                  fontWeight={"500"}
                  fontSize={{
                    base: "14px",
                    xsm: "14px",
                    ssm: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "16px",
                    xxl: "16px",
                    xxxl: "16px",
                  }}
                >
                  <Wrap>
                    <Button leftIcon={<FaInstagram />}>Instagram</Button>
                    <Button leftIcon={<FaYoutube />}>Youtube</Button>
                    <Button leftIcon={<FaLinkedin />}>Linkden</Button>
                    <Button leftIcon={<FaXTwitter />}>X</Button>
                  </Wrap>
                </Text>
              </Box>
            </Box>

            <Box
              width={{
                base: "200px",
                xsm: "350px",
                ssm: "400px",
                sm: "400px",
                md: "400px",
                lg: "400px",
                xl: "400px",
                xxl: "400px",
                xxxl: "400px",
              }}
              height={{
                base: "200px",
                xsm: "190px",
                ssm: "200px",
                sm: "200px",
                md: "200px",
                lg: "210px",
                xl: "210px",
                xxl: "210px",
                xxxl: "210px",
              }}
              borderRadius="10px"
              backgroundColor="gray.100"
              p="20px"
            >
              <Box>
                <Heading as="h2" fontWeight="bold">
                  Legal
                </Heading>
                <Divider my="20px" />
                <Text
                  fontWeight={"500"}
                  fontSize={{
                    base: "14px",
                    xsm: "14px",
                    ssm: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "16px",
                    xxl: "16px",
                    xxxl: "16px",
                  }}
                >
                  <Wrap>
                    <Button>Privacy Policy</Button>
                    <Button>Terms of Service</Button>
                    <Button>Copyright © 2023 YourCompany</Button>
                  </Wrap>
                </Text>
              </Box>
            </Box>
          </HStack>
        </Box>
      </HStack>




    </>
  );
}
