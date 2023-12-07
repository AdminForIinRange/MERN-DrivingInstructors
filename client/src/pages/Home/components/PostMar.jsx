import React from "react";
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


  const items = [
    {
      name: "Augustus Caesar",
      src: "https://source.unsplash.com/man-in-gray-jacket-wearing-black-sunglasses-sitting-on-orange-car-seat-during-daytime-brc2sfT65gE",
      category: "Transportation",
      description:
        "Absolutely thrilled. I've just welcomed my 100th client on board! 🎉🙌🏼 Thank you to each and every one of you. 🚀💫",
      imageSrc:
        "https://source.unsplash.com/empty-black-helicopter-NJYLizdTYbo",
    },
    {
      name: "Henry Smith",
      src: "https://source.unsplash.com/man-in-black-and-white-long-sleeve-shirt-wearing-sunglasses-standing-beside-green-plant-9hICYHdL6u0",
      category: "Insurance/Financing Services",
      description:
        "Securing Dreams, One Policy at a Time. 💼✨ Grateful for the Opportunity to Safeguard Your Tomorrow. 🛡️💸",
      imageSrc:
        "https://source.unsplash.com/person-holding-black-android-smartphone-DsOnBvYOAYs",
    },
    {
      name: "Straw Hat Luffy",
      src: "https://source.unsplash.com/brown-and-white-dragon-figurine-nU-uOifIwEk",
      category: "Customization/Modification",
      description:
        "From tailored solutions to personalized strategies, I thrive on customizing and modifying approaches to fit your unique needs.",
      imageSrc:
        "https://source.unsplash.com/purple-and-black-porsche-911-yRtrDLJfHzw",
    },
    {
      name: "Adam Qin",
      src: "https://source.unsplash.com/a-man-sitting-in-front-of-a-laptop-computer-War5bJ-O2OU",
      category: "Rental",
      description:
        "Let us be a part of your journey and make your moments extraordinary! 🌟",
      imageSrc:
        "https://source.unsplash.com/orange-jeep-wrangler-parked-near-green-trees-during-daytime-hVjYF5DOqU8",
    },
    
  ];



   
  
    
       
    
    
 

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
      {items.map((item, index) => (
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
              <Avatar src={item.src} mr={"10px"} />
              <Heading fontSize={{
                base: "16px",
                xsm: "16px",
                ssm: "16px",
                sm: "20px",
              }}>
                {item.name}
                <Text whiteSpace="normal" as="span" fontWeight="light">
                  - {item.category}
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
              {item.description}
            </Text>
            <Box
              width={"100%"}
              backgroundImage={item.imageSrc}
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
    <ul className="marquee__content">
      {items.map((item, index) => (
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
              <Avatar src={item.src} mr={"10px"} />
              <Heading fontSize={{
                base: "16px",
                xsm: "16px",
                ssm: "16px",
                sm: "20px",
              }}>
                {item.name}
                <Text whiteSpace="normal" as="span" fontWeight="light">
                  - {item.category}
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
              {item.description}
            </Text>
            <Box
              width={"100%"}
              backgroundImage={item.imageSrc}
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
