import React from "react";
import {useState, useEffect} from "react";
import {
  Box,
  HStack,
  Divider,
  Text,
  Avatar,
  Heading,
  Button,
} from "@chakra-ui/react";
export default function CustomersReviewsMar() {
  const [serviceProviders, setServiceProviders] = useState([]);



  
  useEffect(() => {
    fetch('http://localhost:4000/api/serviceProviders')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setServiceProviders(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);
       
    

  return (
    <>

<Box position="relative" padding="10" >
        <Divider borderWidth={"1.5px"} w={"90%"} />
        <HStack
          fontFamily={"Raleway"}
          fontSize={{ base: "25px", xsm: "25px", ssm: "35px", sm: "40px" }}
          fontWeight={"bold"}
          color={"balck"}
          px="4"
        >
          <Text>Customers Reviews</Text>
        </HStack>
      </Box>


    
    
    <div class="marquee marquee--hover-pause">
    <ul className="marquee__content">
  {serviceProviders.map((serviceProvider, index) => (
    <li key={index}>
      <Box
        border="1px"
        borderColor="gray.200"
        borderRadius="lg"
        p={4}
        minW={"400px"}
        minH={"200px"}
        w={"px"}
      >
        <HStack mb={"4%"}>
          <Avatar
           
            src={serviceProvider.profilePicture}
            mr={"10px"}
          />
          <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
            {serviceProvider.fullName}
            <Text whiteSpace="normal" as="span" fontWeight="light">
              - {serviceProvider.ServiceHeader}
            </Text>
          </Heading>
        </HStack>

        <center>
          <Divider />
        </center>
        <Text
          whiteSpace="normal"
          textDecoration={"w"}
          mt={"3"}
          mb={"3"}
          fontSize={{
            base: "12px",
            xsm: "12px",
            ssm: "12px",
            sm: "16px",
            md: "16px",
            lg: "16px",
            xl: "16px",
            xxl: "16px",
            xxxl: "16px",
          }}
        >
          {serviceProvider.templateReview}
        </Text>
      </Box>
    </li>
  ))}
</ul>

<ul className="marquee__content">
  {serviceProviders.map((serviceProvider, index) => (
    <li key={index}>
      <Box
        border="1px"
        borderColor="gray.200"
        borderRadius="lg"
        p={4}
        minW={"400px"}
        minH={"200px"}
        w={"px"}
      >
        <HStack mb={"4%"}>
          <Avatar
           
            src={serviceProvider.profilePicture}
            mr={"10px"}
          />
          <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
            {serviceProvider.fullName}
            <Text whiteSpace="normal" as="span" fontWeight="light">
              - {serviceProvider.ServiceHeader}
            </Text>
          </Heading>
        </HStack>

        <center>
          <Divider />
        </center>
        <Text
          whiteSpace="normal"
          textDecoration={"w"}
          mt={"3"}
          mb={"3"}
          fontSize={{
            base: "12px",
            xsm: "12px",
            ssm: "12px",
            sm: "16px",
            md: "16px",
            lg: "16px",
            xl: "16px",
            xxl: "16px",
            xxxl: "16px",
          }}
        >
          {serviceProvider.templateReview}
        </Text>
      </Box>
    </li>
  ))}
</ul>


        
      </div>
    
      </>
  )
}
