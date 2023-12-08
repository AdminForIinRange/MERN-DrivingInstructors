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
import { FaShare, FaCheck, FaComment } from "react-icons/fa";









export default function PostMar() {
  const [serviceProviders, setServiceProviders] = useState([]);

      const PostFooter = () => {
    return (
      <>
        <HStack justify="space-around" mt={"10px"}>
          <Text>
            <Button variant={"ghost"} leftIcon={<FaShare />}>
              Share
            </Button>
          </Text>
          <Text>
            <Button variant={"ghost"} leftIcon={<FaCheck />}>
              Like
            </Button>
          </Text>
          <Text>
            <Button variant={"ghost"} leftIcon={<FaComment />}>
              Comment
            </Button>
          </Text>
        </HStack>
      </>
    );
  };


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
      <Box
        position="relative"
        padding="10"
        mt={{
          base: "300px",
          xsm: "-300px",
          ssm: "-300px",
          sm: "0",
          md: "0",
          lg: "0",
          xl: "0",
          xxl: "0",
        }}
      >
        <Divider borderWidth={"1.5px"} w={"90%"} />
        <HStack
          fontFamily={"Raleway"}
          fontSize={{ base: "25px", xsm: "25px", ssm: "35px", sm: "40px" }}
          fontWeight={"bold"}
          color={"balck"}
          px="4"
        >
          <Text>Top Post</Text>
        </HStack>
      </Box>

      <HStack overflowY={"auto"} gap={"1%"} justify={"center"} align={"start"}>
        <div class="marquee marquee--hover-pause">
        <ul className="marquee__content">
      {serviceProviders.map((serviceProvider, index) => (
        <li key={index}>
          <Box
            border="1px"
            borderColor="gray.200"
            borderRadius="lg"
            p={5}
            maxW={"500px"}
            maxH={"100%"}
          >
            <HStack mb={"3%"}>
              <Avatar src={serviceProvider.profilePicture} mr={"10px"} />
              <Heading fontSize={{
                base: "16px",
                xsm: "16px",
                ssm: "16px",
                sm: "20px",
              }}>
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
                base: "14px",
                xsm: "14px",
                ssm: "14px",
                sm: "16px",
              }}
            >
              {serviceProvider.templatePost}
              
            </Text>
            <Box
              width={"100%"}
              backgroundImage={serviceProvider.templatePostImg}
              backgroundSize={"100%"}
              backgroundPosition={"center"}
              backgroundRepeat={"no-repeat"}
              borderRadius={"10px"}
              h={"300px"}
            ></Box>
            <PostFooter />
          </Box>
        </li>
      ))}
    </ul><ul className="marquee__content">
      {serviceProviders.map((serviceProvider, index) => (
        <li key={index}>
          <Box
            border="1px"
            borderColor="gray.200"
            borderRadius="lg"
            p={5}
            maxW={"500px"}
            maxH={"100%"}
          >
            <HStack mb={"3%"}>
              <Avatar src={serviceProvider.profilePicture} mr={"10px"} />
              <Heading fontSize={{
                base: "16px",
                xsm: "16px",
                ssm: "16px",
                sm: "20px",
              }}>
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
                base: "14px",
                xsm: "14px",
                ssm: "14px",
                sm: "16px",
              }}
            >
              {serviceProvider.templatePost}
            </Text>
            <Box
              width={"100%"}
              backgroundImage={serviceProvider.templatePostImg}
              backgroundSize={"100%"}
              backgroundPosition={"center"}
              backgroundRepeat={"no-repeat"}
              borderRadius={"10px"}
              h={"300px"}
            ></Box>
            <PostFooter />
          </Box>
        </li>
      ))}
    </ul>
        </div>
      </HStack>
    </>
  );
}
