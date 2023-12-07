import React from "react";
import { Box, HStack, Image, Heading, useBreakpointValue } from "@chakra-ui/react";
import homeCollage from "../../../assets/Images/New Car.png";
export default function Collage() {

    const backgroundImageUrls = {
        base: "https://source.unsplash.com/photosman-jumping-beside-red-pickup-truck-c6wBv31-L2I",
        xsm: "https://source.unsplash.com/photosman-jumping-beside-red-pickup-truck-c6wBv31-L2I",
        ssm: "https://source.unsplash.com/photosman-jumping-beside-red-pickup-truck-c6wBv31-L2I",
        sm: "https://source.unsplash.com/photosman-jumping-beside-red-pickup-truck-c6wBv31-L2I",
        md: "https://source.unsplash.com/photosman-jumping-beside-red-pickup-truck-c6wBv31-L2I",
      };
      
    const notSmallScreen = useBreakpointValue({ base: true, lg: false });
  return (
    <>
    
    <HStack justify={"center"} transition="transform, 0.3s ease-in-out">
        {!notSmallScreen ? (
          <>
            <Image
              src={homeCollage}
              alt="Collage"
              w={"95%"}
              objectFit={"cover"}
              objectPosition="center"
            />
          </>
        ) : (
          <>
            <Box
              mt={"20px"}
              boxShadow={"0px  0px 30px rgb(0,0,0)"}
              width={"95%"}
              h={"300px"}
              borderRadius={"10px"}
              backgroundPosition={"center"}
              color={"White"}
              backgroundImage={backgroundImageUrls}
              backgroundSize={{
                base: "200%",
                xsm: "200%",
                ssm: "200%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%  ",
                xxl: "100%",
              }}
              backgroundRepeat={"no-repeat"}
            >
              <Heading
                padding={"3%"}
                fontSize={{
                  base: "30px",
                  xsm: "30px",
                  ssm: "30px",
                  sm: "40px",
                  md: "50px",
                  lg: "50px",
                  xl: "50px  ",
                  xxl: "50px",
                }}
              >
                Transforming Rides, Elevating Journeys
              </Heading>
            </Box>
          </>
        )}
      </HStack></>
  )
}
