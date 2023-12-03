import {
  Flex,
  Button,
  Box,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Wrap,
  Grid,
  GridItem,
  Image,
  HStack,
} from "@chakra-ui/react";

import homeCollage from "../../assets/Images/New Car.png";
export default function home() {
  return (
    <>
      <Grid
        templateColumns={"repeat(5, 1fr) "}
        templateRows={"repeat(5, 1fr) "}
        gridTemplate={"repeat(5, 1fr)"}
      >
        <GridItem
          gridColumn={{
            base: "1/5 span",
            xsm: "1/5 span",
            sm: "1/5 span",
            md: "1/5 span",
            lg: "1/5 span",
            xl: "1/5 span",
            xxl: "1/5 span",
          }}
          gridRow={{
            base: "1/5 span",
            xsm: "1/5 span",
            sm: "1/5 span",
            md: "1/5 span",
            lg: "1/5 span",
            xl: "1/5 span",
            xxl: "1/5 span",
          }}
        >
          <HStack justify={"center"}>

          <Image
            src={homeCollage}
            alt="Collage"
         
          w={"95%"}
        

          
            objectFit={"cover"}
            objectPosition="center"
          />


          </HStack>

         
        </GridItem>
      </Grid>
    </>
  );
}
