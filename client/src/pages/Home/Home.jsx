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
  Text,
  AbsoluteCenter,
  Image,
  Stack,
  InputLeftElement,
  InputLeftAddon,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  MenuItemOption,
  MenuOptionGroup,
 
  HStack,
  Heading,
  InputGroup,
  Avatar,
  Select,
  Container,
  Divider,
  Card,
  CardHeader,
  CardBody,
  Highlight ,
  CardFooter,
  AspectRatio,
  ButtonGroup,
  Center,
   Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";



import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,LineChart, Line, Legend } from 'recharts';

import "./Home.css";
import {
  PhoneIcon,
  Search2Icon,
  ChevronDownIcon,
  UpDownIcon,
} from "@chakra-ui/icons";
import homeCollage from "../../assets/Images/New Car.png";
import { useState, useEffect,  } from "react";
import Car3d from "../../assets/Images/3d car.png";
import Workplace3D from "../../assets/Images/3d workplace.png";
import Office3d from "../../assets/Images/Office 3d.png";
import SeaNSun from "../../assets/Images/SeaNsun.png";
export default function home() {



  const data = [
    {
      name: "2016",
      UserGrowth: 1100670,
    },
    {
      name: "2017",
      UserGrowth: "2295670",
    },
    {
      name: "2018",
      UserGrowth: 2549670,
    },
    {
      name: "2019",
      UserGrowth: 2340670,
    },
    {
      name: "2020",
      UserGrowth: 3605670,
    },
    {
      name: "2021",
      UserGrowth: 4005670,
    },
    {
      name: "2022",
      UserGrowth: 3505670,
    },
    {
      name: "2023",
      UserGrowth: 5345670, // Update this value with the new count
    },
  ];
  



  const [selectedValueAsset, setSelectedValueAsset] = useState("Suburb");
  const [inputValue, setInputValue] = useState("");

  const handleSelectAssest = (value) => {
    setSelectedValueAsset(value);
  };

  function handleInput(e) {
    console.log(e.target.value);
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const [scrollPositions, setScrollPositions] = useState({
    div300: false,
    div700: false,
    div800: false,
    // Add more divs as needed
  });

  const notSmallScreen = useBreakpointValue({ base: true, lg: false });
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;

      if (scrollY >= 300) {
        setScrollPositions((prevPositions) => ({
          ...prevPositions,
          div300: true,
        }));
      } else {
        setScrollPositions((prevPositions) => ({
          ...prevPositions,
          div300: false,
        }));
      }

      if (scrollY >= 700) {
        setScrollPositions((prevPositions) => ({
          ...prevPositions,
          div700: true,
        }));
      } else {
        setScrollPositions((prevPositions) => ({
          ...prevPositions,
          div700: false,
        }));
      }

      if (scrollY >= 800) {
        setScrollPositions((prevPositions) => ({
          ...prevPositions,
          div800: true,
        }));
      } else {
        setScrollPositions((prevPositions) => ({
          ...prevPositions,
          div800: false,
        }));
      }

      // Add more conditions for other divs as needed
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRefreshKey((prevKey) => prevKey + 1);
    }, 30000); // Refresh content after 5 seconds

    return () => clearTimeout(timeout);
  }, [refreshKey]);










  return (
    <>
      <Box
        bg={"#D2E0FB"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundImage={{
          base: "https://source.unsplash.com/white-boat-on-sea-under-white-sky-during-daytime-TCbNpCEq4W4",
          xsm: "https://source.unsplash.com/white-boat-on-sea-under-white-sky-during-daytime-TCbNpCEq4W4",
          ssm: "https://source.unsplash.com/white-boat-on-sea-under-white-sky-during-daytime-TCbNpCEq4W4",
          sm: "https://source.unsplash.com//white-swan-on-blue-sea-during-daytime-Zn0OvfhhDQ4",
          md: "https://source.unsplash.com/view-of-mountaintops-with-clouds-Wl7ZewvzIb0",
          lg: "https://source.unsplash.com//tilt-lens-photography-of-string-lights-under-cloudy-skies-78Fr6nZRDIc",
          xl: SeaNSun,
          xxl: SeaNSun,
        }}
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
            // className="animate__animated animate__slideInLeft animate__slower animate__delay-500ms"
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
            // color={{
            //   base: "red",
            //   xsm: "blue",

            //   ssm: "green",
            //   sm: "red.200",
            //   md: "purple",
            //   lg: "gray",
            //   xl: "yellow",
            //   xxl: "white",
            //   xxxl: "black",
            // }}

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
          <ButtonGroup
             transition="transform, 0.3s ease-in-out">
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
              <Button
              
              
                value={"Performance Tuning/Racing Services"}
                transition="transform, 0.3s ease-in-out"
                p={{
                  base: "15px",
                  xsm: "15px",
                  ssm: "15px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                  xl: "20px",
                  xxl: "20px",
                }}
                fontSize={{
                  base: "10px",
                  xsm: "10px",
                  ssm: "10px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "15px",
                  xxl: "15px",
                }}
                colorScheme="teal"
                variant="outline"
                size={"sm"}
              >
                Performance Tuning/Racing Services
              </Button>
              <Button
                value={"Rental"}
                transition="transform, 0.3s ease-in-out"
                p={{
                  base: "15px",
                  xsm: "15px",
                  ssm: "15px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                  xl: "20px",
                  xxl: "20px",
                }}
                fontSize={{
                  base: "10px",
                  xsm: "10px",
                  ssm: "10px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "15px",
                  xxl: "15px",
                }}
                colorScheme="teal"
                variant="outline"
                size={"sm"}
               
              >
                Rental
              </Button>
              <Button
                value={"Instruction/Training"}
                transition="transform, 0.3s ease-in-out"
                p={{
                  base: "15px",
                  xsm: "15px",
                  ssm: "15px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                  xl: "20px",
                  xxl: "20px",
                }}
                fontSize={{
                  base: "10px",
                  xsm: "10px",
                  ssm: "10px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "15px",
                  xxl: "15px",
                }}
                colorScheme="teal"
                variant="outline"
                size={"sm"}
               
              >
                Instruction/Training
              </Button>

              <Button
                value={"Vehicle Restoration"}
                transition="transform, 0.3s ease-in-out"
                p={{
                  base: "15px",
                  xsm: "15px",
                  ssm: "15px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                  xl: "20px",
                  xxl: "20px",
                }}
                fontSize={{
                  base: "10px",
                  xsm: "10px",
                  ssm: "10px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "15px",
                  xxl: "15px",
                }}
                colorScheme="teal"
                variant="outline"
                size={"sm"}
               
              >
                Vehicle Restoration
              </Button>
              <Button
                value={"Parts/Accessories Sales"}
                transition="transform, 0.3s ease-in-out"
                p={{
                  base: "15px",
                  xsm: "15px",
                  ssm: "15px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                  xl: "20px",
                  xxl: "20px",
                }}
                fontSize={{
                  base: "10px",
                  xsm: "10px",
                  ssm: "10px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "15px",
                  xxl: "15px",
                }}
                colorScheme="teal"
                variant="outline"
                size={"sm"}
               
              >
                Parts/Accessories Sales
              </Button>
              <Button
                value={" Detailing /Cleaning"}
                transition="transform, 0.3s ease-in-out"
                p={{
                  base: "15px",
                  xsm: "15px",
                  ssm: "15px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                  xl: "20px",
                  xxl: "20px",
                }}
                fontSize={{
                  base: "10px",
                  xsm: "10px",
                  ssm: "10px",
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "15px",
                  xxl: "15px",
                }}
                colorScheme="teal"
                variant="outline"
                size={"sm"}
             
              >
                Detailing /Cleaning
              </Button>
            </Wrap>
          </ButtonGroup>
        </HStack>
      </Box>
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
        gap={{
          base: "1%",
          xsm: "1%",
          ssm: "1%",
          sm: "1%",
          md: "1%",
          lg: "2%",
          xl: "3%",
          xxl: "4%",
          xxxl: "5%",
        }}
        mt={"2%"}
        p={"0% 5%"}
      >
        <span class="animate__animated animate__fadeInUp animate__delay-1s	">
          <Box
            boxShadow={"0 0 10px 1px teal"}
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "0 0 150px 1px teal",
            }}
            bg={"#C6F6D5"}
            backgroundImage={Car3d}
            backgroundSize={{
              base: "100%",
              xsm: "100%",
              ssm: "60%",
              sm: "60%",
              md: "60%",
              lg: "50%",
              xl: "110%",
              xxl: "110%",
              xxxl: "110%",
            }}
            backgroundPosition={{
              base: "top",
              xsm: "top",
              ssm: " left center",
              sm: "center left",
              md: "center left",
              lg: "center left",
              xl: "top",
              xxl: "top",
              xxxl: "top",
            }}
            backgroundRepeat={"no-repeat"}
            mt={"10px"}
            border={"1px solid teal"}
            borderRadius={"10px"}
            w={{
              base: "300px",
              xsm: "350px",
              ssm: "500px",
              sm: "600px",
              md: "600px",
              lg: "800px",
              xl: "350px",
              xxl: "400px",
              xxxl: "400px",
            }}
            h={{
              base: "150px",
              xsm: "150px",
              ssm: "150px",
              sm: "130px",
              md: "130px",
              lg: "130px",
              xl: "300px",
              xxl: "300px",
              xxxl: "300px",
            }}
          >
            <Grid
              templateColumns={"repeat(10, 1fr) "}
              templateRows={"repeat(10, 1fr) "}
              gridTemplate={"repeat(10, 1fr)"}
            >
              <GridItem
                gridColumn={{
                  base: "9/10",
                  xsm: "9/10",
                  ssm: "9/10",
                  sm: "9/10",
                  md: "9/10",
                  lg: "9/10",
                  xl: "5/10",
                  xxl: "6/10",
                }}
                gridRow={{
                  base: "8/10",
                  xsm: "8/10",
                  ssm: "8/10",
                  sm: "2/10",
                  md: "2/10",
                  lg: "2/10",
                  xl: "9/10  ",
                  xxl: "9/10",
                }}
              >
                <Text
                  fontWeight={"bold"}
                  transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                  _hover={{ transform: "scale(1.1)" }}
                >
                  Explore our services. <i class="gg-arrow-long-right"></i>
                </Text>
              </GridItem>
            </Grid>
          </Box>
        </span>

        <span class="animate__animated animate__fadeInUp animate__delay-2s">
          <Box
            boxShadow={"0 0 10px 1px brown"}
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "0 0 150px 1px brown",
            }}
            bg={"#FEEBC8"}
            backgroundImage={Workplace3D}
            backgroundSize={{
              base: "100%",
              xsm: "100%",
              ssm: "60%",
              sm: "60%",
              md: "60%",
              lg: "50%",
              xl: "110%",
              xxl: "110%",
              xxxl: "110%",
            }}
            backgroundPosition={{
              base: "top",
              xsm: "top",
              ssm: " left ",
              sm: "top left",
              md: "top left",
              lg: "top left",
              xl: "top",
              xxl: "top",
              xxxl: "top",
            }}
            backgroundRepeat={"no-repeat"}
            mt={"10px"}
            border={"1px solid brown"}
            borderRadius={"10px"}
            w={{
              base: "300px",
              xsm: "350px",
              ssm: "500px",
              sm: "600px",
              md: "600px",
              lg: "800px",
              xl: "350px",
              xxl: "400px",
              xxxl: "400px",
            }}
            h={{
              base: "150px",
              xsm: "150px",
              ssm: "150px",
              sm: "130px",
              md: "130px",
              lg: "130px",
              xl: "300px",
              xxl: "300px",
              xxxl: "300px",
            }}
          >
            <Grid
              templateColumns={"repeat(10, 1fr) "}
              templateRows={"repeat(10, 1fr) "}
              gridTemplate={"repeat(10, 1fr)"}
            >
              <GridItem
                gridColumn={{
                  base: "9/10",
                  xsm: "9/10",
                  ssm: "9/10",
                  sm: "9/10",
                  md: "9/10",
                  lg: "9/10",
                  xl: "5/10",
                  xxl: "6/10",
                }}
                gridRow={{
                  base: "8/10",
                  xsm: "8/10",
                  ssm: "8/10",
                  sm: "2/10",
                  md: "2/10",
                  lg: "2/10",
                  xl: "9/10  ",
                  xxl: "9/10",
                }}
              >
                <Text
               
                  fontWeight={"bold"}
                  transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                  _hover={{ transform: "scale(1.1)" }}
  
              
             
              
                 
             
                >
                  Become a Provider. <i class="gg-arrow-long-right"></i>
                </Text>

                
              </GridItem>
            </Grid>
          </Box>
        </span>

        <span class="animate__animated animate__fadeInUp animate__delay-3s">
          <Box
            boxShadow={"0 0 10px 1px purple"}
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "0 0 150px 1px purple",
            }}
            bg={"#E9D8FD"}
            backgroundImage={Office3d}
            backgroundSize={{
              base: "100%",
              xsm: "100%",
              ssm: "100%",
              sm: "100%",
              md: "90%",
              lg: "70%",
              xl: "120%",
              xxl: "120%",
              xxxl: "120%",
            }}
            backgroundPosition={{
              base: "top",
              xsm: "top",
              ssm: "top",
              sm: "top left",
              md: "top left",
              lg: "top left",
              xl: "top",
              xxl: "top",
              xxxl: "top",
            }}
            backgroundRepeat={"no-repeat"}
            mt={"10px"}
            border={"1px solid purple"}
            borderRadius={"10px"}
            w={{
              base: "300px",
              xsm: "350px",
              ssm: "500px",
              sm: "600px",
              md: "600px",
              lg: "800px",
              xl: "350px",
              xxl: "400px",
              xxxl: "400px",
            }}
            h={{
              base: "150px",
              xsm: "150px",
              ssm: "150px",
              sm: "130px",
              md: "130px",
              lg: "130px",
              xl: "300px",
              xxl: "300px",
              xxxl: "300px",
            }}
          >
            <Grid
              templateColumns={"repeat(10, 1fr) "}
              templateRows={"repeat(10, 1fr) "}
              gridTemplate={"repeat(10, 1fr)"}
            >
              <GridItem
                gridColumn={{
                  base: "9/10",
                  xsm: "9/10",
                  ssm: "9/10",
                  sm: "9/10",
                  md: "9/10",
                  lg: "9/10",
                  xl: "5/10",
                  xxl: "6/10",
                }}
                gridRow={{
                  base: "8/10",
                  xsm: "8/10",
                  ssm: "8/10",
                  sm: "2/10",
                  md: "2/10",
                  lg: "2/10",
                  xl: "9/10  ",
                  xxl: "9/10",
                }}
              >
                <Text
                  color={"black"}
                  fontWeight={"bold"}
                  transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                  _hover={{ transform: "scale(1.1)" }}
                >
                  Try Premium. <i class="gg-arrow-long-right"></i>
                </Text>
              </GridItem>
            </Grid>
          </Box>
        </span>
      </HStack>
      <Center>
        <Divider borderWidth={"1.5px"} w={"90%"} mt={"5%"} />
      </Center>

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
              boxShadow={"0px  0px 30px rgb(0,0,0)"}
              width={"95%"}
              h={"300px"}
              borderRadius={"10px"}
              backgroundPosition={"center"}
              color={"White"}
              backgroundImage={{
                base: "https://source.unsplash.com/photosman-jumping-beside-red-pickup-truck-c6wBv31-L2I",
                xsm: "https://source.unsplash.com/photosman-jumping-beside-red-pickup-truck-c6wBv31-L2I",
                ssm: "https://source.unsplash.com/photosman-jumping-beside-red-pickup-truck-c6wBv31-L2I",
                sm: "https://source.unsplash.com/photosman-jumping-beside-red-pickup-truck-c6wBv31-L2I",
                md: "https://source.unsplash.com/photosman-jumping-beside-red-pickup-truck-c6wBv31-L2I",
              }}
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
                1 Million Providers
              </Heading>
            </Box>
          </>
        )}
      </HStack>

      {!notSmallScreen ? (
        <>
          <Grid
            minH={"1000px"}
            mt={"5%"}
            templateColumns={"repeat(14, 1fr) "}
            templateRows={"repeat(14, 1fr) "}
            gridTemplate={"repeat(14, 1fr)"}
          >
            <GridItem
              gridColumn={{
                base: "9/10",
                xsm: "9/10",
                ssm: "9/10",
                sm: "2/9",
                md: "2/9",
                lg: "2/9",
                xl: "2/9",
                xxl: "2/9",
              }}
              gridRow={{
                base: "8/10",
                xsm: "8/10",
                ssm: "8/10",
                sm: "1/5",
                md: "1/5",
                lg: "1/5",
                xl: "1/5  ",
                xxl: "1/5",
              }}
            >
              <div
                className={
                  scrollPositions.div300
                    ? "animate__animated animate__zoomIn animate__slow"
                    : "animate__animated animate__zoomOut animate__slow"
                }
                style={{ height: "100%" }}
              >
                <Card
                  boxShadow={"0px  0px 30px rgb(0,0,0)"}
                  width={"100%"}
                  h={"100%"}
                  border={"1px solid balck"}
                  borderRadius={"10px"}
                  backgroundPosition={"center"}
                  color={"White"}
                  backgroundImage={
                    "https://source.unsplash.com/a-man-working-on-a-piece-of-metal-NvWjcH0YEhc"
                  }
                  backgroundSize={"100%"}
                  backgroundRepeat={"no-repeat"}
                  transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                  _hover={{ transform: "scale(1.1)" }}
                >
                  <CardHeader>
                    <Heading>1 Million Providers</Heading>
                  </CardHeader>

                  <CardBody>
                    <Text
                      fontSize={{
                        base: "15px",
                        xsm: "15px",
                        ssm: "15px",
                        sm: "20px",
                        md: "20px",
                        lg: "20px",
                        xl: "20px  ",
                        xxl: "20px",
                      }}
                    >
                      This vast network ensures an extensive range of options
                      and expertise
                    </Text>
                  </CardBody>
                </Card>
              </div>
            </GridItem>

            <GridItem
              gridColumn={{
                base: "9/10",
                xsm: "9/10",
                ssm: "9/10",
                sm: "10/14",
                md: "10/14",
                lg: "10/14",
                xl: "10/14",
                xxl: "10/14",
              }}
              gridRow={{
                base: "8/10",
                xsm: "8/10",
                ssm: "8/10",
                sm: "1/7",
                md: "1/7",
                lg: "1/7",
                xl: "1/7  ",
                xxl: "1/7",
              }}
            >
              <div
                className={
                  scrollPositions.div300
                    ? "animate__animated animate__zoomIn animate__fast"
                    : "animate__animated animate__zoomOut animate__fast"
                }
                style={{ height: "100%" }}
              >
                <Card
                  boxShadow={"0px  0px 30px rgb(0,0,0)"}
                  color={"white"}
                  backgroundImage={
                    "https://source.unsplash.com/green-off-road-vehicle-on-snow-during-winter-season-0hJL8lBl0qQ"
                  }
                  backgroundSize={"cover"}
                  width={"100%"}
                  h={"100%"}
                  border={"1px solid balck"}
                  borderRadius={"10px"}
                  backgroundPosition={"center"}
                  color={"#18191B"}
                  transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                  _hover={{ transform: "scale(1.1)" }}
                >
                  <CardHeader>
                    <Heading>Client Based</Heading>
                  </CardHeader>

                  <CardBody>
                    <Text
                      fontSize={{
                        base: "15px",
                        xsm: "15px",
                        ssm: "15px",
                        sm: "20px",
                        md: "20px",
                        lg: "20px",
                        xl: "20px  ",
                        xxl: "20px",
                      }}
                    >
                      Our platform ensures a tailored experience for every user.
                    </Text>
                  </CardBody>
                </Card>
              </div>
            </GridItem>

            <GridItem
              gridColumn={{
                base: "9/10",
                xsm: "9/10",
                ssm: "9/10",
                sm: "2/8",
                md: "2/8",
                lg: "2/8",
                xl: "2/8",
                xxl: "2/8",
              }}
              gridRow={{
                base: "8/10",
                xsm: "8/10",
                ssm: "8/10",
                sm: "6/11",
                md: "6/11",
                lg: "6/11",
                xl: "6/11  ",
                xxl: "6/11",
              }}
            >
              <div
                className={
                  scrollPositions.div700
                    ? "animate__animated animate__zoomIn animate__slower"
                    : "animate__animated animate__zoomOut animate__slower"
                }
                style={{ height: "100%" }}
              >
                <Card
                  boxShadow={"0px  0px 30px rgb(0,0,0)"}
                  width={"100%"}
                  h={"100%"}
                  border={"1px solid balck"}
                  borderRadius={"10px"}
                  backgroundPosition={"center"}
                  color={"white"}
                  backgroundImage={
                    "https://source.unsplash.com/time-lapse-photography-of-lighted-road-at-night-YTk8tO3PGdA"
                  }
                  backgroundSize={{
                    base: "500%",
                    xsm: "370%",
                    ssm: "350%",
                    sm: "300%",
                    md: "200%",
                    lg: "200%",
                    xl: "150%  ",
                    xxl: "100%",
                  }}
                  backgroundRepeat={"no-repeat"}
                  transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                  _hover={{ transform: "scale(1.1)" }}
                >
                  <CardHeader>
                    <Heading>Support and Assistance</Heading>
                  </CardHeader>

                  <CardBody>
                    <Text
                      fontSize={{
                        base: "15px",
                        xsm: "15px",
                        ssm: "15px",
                        sm: "20px",
                        md: "20px",
                        lg: "20px",
                        xl: "20px  ",
                        xxl: "20px",
                      }}
                    >
                      Offer live chat or immediate support channels for user
                      queries or issues
                    </Text>
                  </CardBody>
                </Card>
              </div>
            </GridItem>

            <GridItem
              gridColumn={{
                base: "9/10",
                xsm: "9/10",
                ssm: "9/10",
                sm: "9/14",
                md: "9/14",
                lg: "9/14",
                xl: "9/14",
                xxl: "9/14",
              }}
              gridRow={{
                base: "8/10",
                xsm: "8/10",
                ssm: "8/10",
                sm: "8/14",
                md: "8/14",
                lg: "8/14",
                xl: "8/14  ",
                xxl: "8/14",
              }}
            >
              <div
                className={
                  scrollPositions.div800
                    ? "animate__animated animate__zoomIn animate__fast"
                    : "animate__animated animate__zoomOut animate__fast"
                }
                style={{ height: "100%" }}
              >
                <Card
                  boxShadow={"0px  0px 30px rgb(0,0,0)"}
                  width={"100%"}
                  h={"100%"}
                  border={"1px solid balck"}
                  borderRadius={"10px"}
                  backgroundPosition={"center "}
                  color={"white"}
                  backgroundImage={
                    "https://source.unsplash.com/vehicles-parked-on-road-at-night-_ntOGI_l8ks"
                  }
                  backgroundSize={"110%"}
                  backgroundRepeat={"no-repeat"}
                  transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                  _hover={{ transform: "scale(1.1)" }}
                >
                  <CardHeader>
                    <Heading>Strong Community</Heading>
                  </CardHeader>

                  <CardBody>
                    <Text
                      fontSize={{
                        base: "15px",
                        xsm: "15px",
                        ssm: "15px",
                        sm: "20px",
                        md: "20px",
                        lg: "20px",
                        xl: "20px  ",
                        xxl: "20px",
                      }}
                    >
                      Provides an encouraging and supportive environment for
                      everyone
                    </Text>
                  </CardBody>
                </Card>
              </div>
            </GridItem>
          </Grid>{" "}
        </>
      ) : (
        //switch

        <>
          <Grid
            minH={"1000px"}
            mt={"5%"}
            templateColumns={"repeat(14, 1fr) "}
            templateRows={"repeat(14, 1fr) "}
            gridTemplate={"repeat(14, 1fr)"}
          >
            <GridItem
              gridColumn={{
                base: "2/9",
                xsm: "2/8",
                ssm: "2/9",
                sm: "2/9",
                md: "2/9",
                lg: "2/9",
                xl: "2/9",
                xxl: "2/9",
              }}
              gridRow={{
                base: "1/5",
                xsm: "1/5",
                ssm: "1/5",
                sm: "1/5",
                md: "1/5",
                lg: "1/5",
                xl: "1/5  ",
                xxl: "1/5",
              }}
            >
              <div style={{ height: "100%" }}>
                <Card
                  boxShadow={"0px  0px 30px rgb(0,0,0)"}
                  width={"100%"}
                  h={"100%"}
                  border={"1px solid balck"}
                  borderRadius={"5px"}
                  backgroundPosition={"center"}
                  color={"White"}
                  backgroundImage={
                    "https://source.unsplash.com/a-man-working-on-a-piece-of-metal-NvWjcH0YEhc"
                  }
                  backgroundSize={{
                    base: "200%",
                    xsm: "200%",
                    ssm: "200%",
                    sm: "200%",
                    md: "200%",
                    lg: "100%",
                    xl: "100%  ",
                    xxl: "100%",
                  }}
                  backgroundRepeat={"no-repeat"}
                >
                  <CardHeader>
                    <Heading
                      fontSize={{
                        base: "10px",
                        xsm: "18px",
                        ssm: "18px",
                        sm: "30px",
                        md: "30px",
                        lg: "40px",
                        xl: "50px  ",
                        xxl: "50px",
                      }}
                    >
                      1 Million Providers
                    </Heading>
                  </CardHeader>

                  <CardBody>
                    <Text
                      fontSize={{
                        base: "15px",
                        xsm: "15px",
                        ssm: "15px",
                        sm: "15px",
                        md: "15px",
                        lg: "15px",
                        xl: "15px  ",
                        xxl: "15px",
                      }}
                    >
                      This vast network ensures an extensive range of options
                      and expertise
                    </Text>
                  </CardBody>
                </Card>
              </div>
            </GridItem>

            <GridItem
              gridColumn={{
                base: "10/14",
                xsm: "9/14",
                ssm: "10/14",
                sm: "10/14",
                md: "10/14",
                lg: "10/14",
                xl: "10/14",
                xxl: "10/14",
              }}
              gridRow={{
                base: "1/7",
                xsm: "1/5",
                ssm: "1/5",
                sm: "1/7",
                md: "1/7",
                lg: "1/7",
                xl: "1/7  ",
                xxl: "1/7",
              }}
            >
              <div style={{ height: "100%" }}>
                <Card
                  boxShadow={"0px  0px 30px rgb(0,0,0)"}
                  color={"white"}
                  backgroundImage={
                    "https://source.unsplash.com/white-car-m3m-lnR90uM"
                  }
                  backgroundSize={{
                    base: "500%",
                    xsm: "500%",
                    ssm: "500%",
                    sm: "500%",
                    md: "500%",
                    lg: "100%",
                    xl: "100%  ",
                    xxl: "100%",
                  }}
                  width={"100%"}
                  h={"100%"}
                  backgroundRepeat={"no-repeat"}
                  border={"1px solid balck"}
                  borderRadius={"5px"}
                  backgroundPosition={"top left"}
                >
                  <CardHeader>
                    <Heading
                      fontSize={{
                        base: "10px",
                        xsm: "18px",
                        ssm: "18px",
                        sm: "30px",
                        md: "30px",
                        lg: "40px",
                        xl: "50px  ",
                        xxl: "50px",
                      }}
                    >
                      Client Based
                    </Heading>
                  </CardHeader>

                  <CardBody>
                    <Text
                      fontSize={{
                        base: "15px",
                        xsm: "15px",
                        ssm: "15px",
                        sm: "15px",
                        md: "15px",
                        lg: "15px",
                        xl: "15px  ",
                        xxl: "15px",
                      }}
                    >
                      Our platform ensures a tailored experience for every user.
                    </Text>
                  </CardBody>
                </Card>
              </div>
            </GridItem>

            <GridItem
              gridColumn={{
                base: "2/8",
                xsm: "2/8",
                ssm: "2/8",
                sm: "2/8",
                md: "2/8",
                lg: "2/8",
                xl: "2/8",
                xxl: "2/8",
              }}
              gridRow={{
                base: "6/10",
                xsm: "6/10",
                ssm: "6/10",
                sm: "6/11",
                md: "6/11",
                lg: "6/11",
                xl: "6/11  ",
                xxl: "6/11",
              }}
            >
              <div style={{ height: "100%" }}>
                <Card
                  boxShadow={"0px  0px 30px rgb(0,0,0)"}
                  width={"100%"}
                  h={"100%"}
                  border={"1px solid balck"}
                  borderRadius={"5px"}
                  backgroundPosition={"left"}
                  color={"white"}
                  backgroundImage={
                    "https://source.unsplash.com/time-lapse-photography-of-lighted-road-at-night-YTk8tO3PGdA"
                  }
                  backgroundSize={{
                    base: "500%",
                    xsm: "500%",
                    ssm: "600%",
                    sm: "300%",
                    md: "250%",
                    lg: "200%",
                    xl: "200%  ",
                    xxl: "200%",
                  }}
                  backgroundRepeat={"no-repeat"}
                >
                  <CardHeader>
                    <Heading
                      fontSize={{
                        base: "10px",
                        xsm: "18px",
                        ssm: "18px",
                        sm: "30px",
                        md: "30px",
                        lg: "40px",
                        xl: "50px  ",
                        xxl: "50px",
                      }}
                    >
                      Support and Assistance
                    </Heading>
                  </CardHeader>

                  <CardBody>
                    <Text
                      fontSize={{
                        base: "15px",
                        xsm: "15px",
                        ssm: "15px",
                        sm: "15px",
                        md: "15px",
                        lg: "15px",
                        xl: "15px  ",
                        xxl: "15px",
                      }}
                    >
                      Offer live chat or immediate support channels for user
                      queries or issues
                    </Text>
                  </CardBody>
                </Card>
              </div>
            </GridItem>

            <GridItem
              gridColumn={{
                base: "9/14",
                xsm: "9/14",
                ssm: "9/14",
                sm: "9/14",
                md: "9/14",
                lg: "9/14",
                xl: "9/14",
                xxl: "9/14",
              }}
              gridRow={{
                base: "8/10",
                xsm: "6/10",
                ssm: "6/10",
                sm: "8/14",
                md: "8/14",
                lg: "8/14",
                xl: "8/14  ",
                xxl: "8/14",
              }}
            >
              <div style={{ height: "100%" }}>
                <Card
                  boxShadow={"0px  0px 30px rgb(0,0,0)"}
                  width={"100%"}
                  h={"100%"}
                  border={"1px solid balck"}
                  borderRadius={"5px"}
                  backgroundPosition={"LEFT"}
                  color={"white"}
                  backgroundImage={
                    "https://source.unsplash.com/white-and-blue-analog-tachometer-gauge-HUJDz6CJEaM"
                  }
                  backgroundSize={{
                    base: "500%",
                    xsm: "370%",
                    ssm: "350%",
                    sm: "300%",
                    md: "250%",
                    lg: "200%",
                    xl: "200%  ",
                    xxl: "200%",
                  }}
                  backgroundRepeat={"no-repeat"}
                >
                  <CardHeader>
                    <Heading
                      fontSize={{
                        base: "10px",
                        xsm: "18px",
                        ssm: "18px",
                        sm: "30px",
                        md: "30px",
                        lg: "40px",
                        xl: "50px  ",
                        xxl: "50px",
                      }}
                    >
                      Strong Community
                    </Heading>
                  </CardHeader>

                  <CardBody>
                    <Text
                      fontSize={{
                        base: "15px",
                        xsm: "15px",
                        ssm: "15px",
                        sm: "15px",
                        md: "15px",
                        lg: "15px",
                        xl: "15px  ",
                        xxl: "15px",
                      }}
                    >
                      Provides an encouraging and supportive environment for
                      everyone
                    </Text>
                  </CardBody>
                </Card>
              </div>
            </GridItem>
          </Grid>
        </>
      )}
      <Box
        position="relative"
        padding="10"
        mt={{
          base: "300px",
          xsm: "-300px",
          ssm: "-300px",
          sm: "-50px",
          md: "-50px",
          lg: "0",
        }}
        mb={"1%"}
      >
         <Divider borderWidth={"1.5px"} w={"90%"} />
        <HStack
          fontFamily={"Raleway"}
          fontSize={{ base: "25px", xsm: "25px", ssm: "35px", sm: "40px" }}
          fontWeight={"bold"}
          color={"balck"}
          px="4"
        >
          <Text>Providers</Text>
        </HStack>
      </Box>
      <div class="marquee marquee--hover-pause">
        <ul class="marquee__content">
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/a-woman-standing-in-front-of-a-neon-sign-HHyvhVlhDDE"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Emily Johnson{" "}
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Repairs
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
                "Exceptional, highly recommended for quality and
                professionalism."
              </Text>
            </Box>
          </li>
          <li>
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/man-in-black-hoodie-wearing-black-framed-eyeglasses-3JmfENcL24M"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Dave Rio{" "}
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Instruction/Training
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
                "Starting with just 0 clients, I leveraged this platform and its
                tools, which helped me grow my clientele so much!"
              </Text>
            </Box>
          </li>
          <li>
            {" "}
            <Box
              border="1px"
              borderColor="gray.200"
              borderRadius="lg"
              p={4}
              minW={"400px"}
              minH={"200px"}
              w={"0px"}
            >
              <HStack mb={"4%"}>
                <Avatar
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/a-man-in-a-space-suit-with-a-mountain-in-the-background-LXspKUjsgH0"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Nero Claudius{" "}
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Adventure
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
                "Impressive website design! It's visually appealing and
                incredibly easy to navigate."
              </Text>
            </Box>
          </li>
          <li>
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/man-in-gray-jacket-wearing-black-sunglasses-sitting-on-orange-car-seat-during-daytime-brc2sfT65gE"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Augustus Caesar
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Transportation
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
                "This platform's user-friendly interface has made my journey as
                a service provider incredibly smooth."
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/man-in-black-and-white-long-sleeve-shirt-wearing-sunglasses-standing-beside-green-plant-9hICYHdL6u0"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Henry Smith
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Insurance/Financing Services
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
                "This platform provided the perfect springboard for my services.
                the growth has been astounding!"
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/mens-gray-crew-neck-shirt-v2aKnjMbP_k"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Sam Marquee
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Insurance/Financing Services
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
                "The ease of setting up as a service provider on this platform
                is commendable."
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/man-in-blue-sweater-with-white-hair-9kDXgXFRmO8"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Winston Churchill
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Customization/Modification
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
                "The simplicity of this platform for service providers is a
                game-changer. It's intuitive, making it easy to manage."
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/a-man-sitting-in-front-of-a-laptop-computer-War5bJ-O2OU"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Adam Qin
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Rental
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
                "The simplicity of this platform for service providers is a
                game-changer."
              </Text>
            </Box>
          </li>
        </ul>

        <ul aria-hidden="true" class="marquee__content">
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/a-woman-standing-in-front-of-a-neon-sign-HHyvhVlhDDE"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Emily Johnson{" "}
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Repairs
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
                "Exceptional, highly recommended for quality and
                professionalism."
              </Text>
            </Box>
          </li>
          <li>
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/man-in-black-hoodie-wearing-black-framed-eyeglasses-3JmfENcL24M"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Dave Rio{" "}
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Instruction/Training
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
                "Starting with just 0 clients, I leveraged this platform and its
                tools, which helped me grow my clientele so much!"
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/a-man-in-a-space-suit-with-a-mountain-in-the-background-LXspKUjsgH0"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Nero Claudius{" "}
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Adventure
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
                "Impressive website design! It's visually appealing and
                incredibly easy to navigate."
              </Text>
            </Box>
          </li>
          <li>
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/man-in-gray-jacket-wearing-black-sunglasses-sitting-on-orange-car-seat-during-daytime-brc2sfT65gE"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Augustus Caesar
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Transportation
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
                "This platform's user-friendly interface has made my journey as
                a service provider incredibly smooth."
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/man-in-black-and-white-long-sleeve-shirt-wearing-sunglasses-standing-beside-green-plant-9hICYHdL6u0"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Henry Smith
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Insurance/Financing Services
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
                "This platform provided the perfect springboard for my services.
                the growth has been astounding!"
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/mens-gray-crew-neck-shirt-v2aKnjMbP_k"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Sam Marquee
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Insurance/Financing Services
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
                "The ease of setting up as a service provider on this platform
                is commendable."
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/man-in-blue-sweater-with-white-hair-9kDXgXFRmO8"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Winston Churchill
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Customization/Modification
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
                "The simplicity of this platform for service providers is a
                game-changer. It's intuitive, making it easy to manage."
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/a-man-sitting-in-front-of-a-laptop-computer-War5bJ-O2OU"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Adam Qin
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Rental
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
                "The simplicity of this platform for service providers is a
                game-changer."
              </Text>
            </Box>
          </li>
        </ul>
      </div>
      <Box position="relative" padding="10">
      <Divider borderWidth={"1.5px"}  w={"90%"} />
        <HStack
          fontFamily={"Raleway"}
          fontSize={{ base: "25px", xsm: "25px", ssm: "35px", sm: "40px" }}
          fontWeight={"bold"}
          color={"balck"}
         
          px="4"
        >
          <Text>Customers</Text>
        </HStack>
      </Box>
      <div class="marquee marquee--hover-pause">
        <ul class="marquee__content">
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/a-woman-standing-in-front-of-a-neon-sign-HHyvhVlhDDE"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Emily Johnson{" "}
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Repairs
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
                "Exceptional, highly recommended for quality and
                professionalism."
              </Text>
            </Box>
          </li>
          <li>
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/man-in-black-hoodie-wearing-black-framed-eyeglasses-3JmfENcL24M"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Dave Rio{" "}
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Instruction/Training
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
                "Starting with just 0 clients, I leveraged this platform and its
                tools, which helped me grow my clientele so much!"
              </Text>
            </Box>
          </li>
          <li>
            {" "}
            <Box
              border="1px"
              borderColor="gray.200"
              borderRadius="lg"
              p={4}
              minW={"400px"}
              minH={"200px"}
              w={"0px"}
            >
              <HStack mb={"4%"}>
                <Avatar
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/a-man-in-a-space-suit-with-a-mountain-in-the-background-LXspKUjsgH0"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Nero Claudius{" "}
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Adventure
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
                "Impressive website design! It's visually appealing and
                incredibly easy to navigate."
              </Text>
            </Box>
          </li>
          <li>
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/man-in-gray-jacket-wearing-black-sunglasses-sitting-on-orange-car-seat-during-daytime-brc2sfT65gE"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Augustus Caesar
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Transportation
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
                "This platform's user-friendly interface has made my journey as
                a service provider incredibly smooth."
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/man-in-black-and-white-long-sleeve-shirt-wearing-sunglasses-standing-beside-green-plant-9hICYHdL6u0"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Henry Smith
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Insurance/Financing Services
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
                "This platform provided the perfect springboard for my services.
                the growth has been astounding!"
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/mens-gray-crew-neck-shirt-v2aKnjMbP_k"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Sam Marquee
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Insurance/Financing Services
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
                "The ease of setting up as a service provider on this platform
                is commendable."
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/man-in-blue-sweater-with-white-hair-9kDXgXFRmO8"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Winston Churchill
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Customization/Modification
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
                "The simplicity of this platform for service providers is a
                game-changer. It's intuitive, making it easy to manage."
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/a-man-sitting-in-front-of-a-laptop-computer-War5bJ-O2OU"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Adam Qin
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Rental
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
                "The simplicity of this platform for service providers is a
                game-changer."
              </Text>
            </Box>
          </li>
        </ul>

        <ul aria-hidden="true" class="marquee__content">
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/a-woman-standing-in-front-of-a-neon-sign-HHyvhVlhDDE"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Emily Johnson{" "}
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Repairs
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
                "Exceptional, highly recommended for quality and
                professionalism."
              </Text>
            </Box>
          </li>
          <li>
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/man-in-black-hoodie-wearing-black-framed-eyeglasses-3JmfENcL24M"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Dave Rio{" "}
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Instruction/Training
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
                "Starting with just 0 clients, I leveraged this platform and its
                tools, which helped me grow my clientele so much!"
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/a-man-in-a-space-suit-with-a-mountain-in-the-background-LXspKUjsgH0"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Nero Claudius{" "}
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Adventure
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
                "Impressive website design! It's visually appealing and
                incredibly easy to navigate."
              </Text>
            </Box>
          </li>
          <li>
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/man-in-gray-jacket-wearing-black-sunglasses-sitting-on-orange-car-seat-during-daytime-brc2sfT65gE"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Augustus Caesar
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Transportation
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
                "This platform's user-friendly interface has made my journey as
                a service provider incredibly smooth."
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/man-in-black-and-white-long-sleeve-shirt-wearing-sunglasses-standing-beside-green-plant-9hICYHdL6u0"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Henry Smith
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Insurance/Financing Services
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
                "This platform provided the perfect springboard for my services.
                the growth has been astounding!"
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/mens-gray-crew-neck-shirt-v2aKnjMbP_k"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Sam Marquee
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Insurance/Financing Services
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
                "The ease of setting up as a service provider on this platform
                is commendable."
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/man-in-blue-sweater-with-white-hair-9kDXgXFRmO8"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Winston Churchill
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Customization/Modification
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
                "The simplicity of this platform for service providers is a
                game-changer. It's intuitive, making it easy to manage."
              </Text>
            </Box>
          </li>
          <li>
            {" "}
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
                  name="Segun Adebayo"
                  src="https://source.unsplash.com/a-man-sitting-in-front-of-a-laptop-computer-War5bJ-O2OU"
                  mr={"10px"}
                />{" "}
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  Adam Qin
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - Rental
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
                  base: "8px",
                  xsm: "8px",
                  ssm: "8px",
                  sm: "10px",
                  md: "16px",
                  lg: "16px",
                  xl: "16px",
                  xxl: "16px",
                  xxxl: "16px",
                }}
              >
                "The simplicity of this platform for service providers is a
                game-changer."
              </Text>
            </Box>
          </li>
        </ul>
      </div>

      <Center>
        <Divider borderWidth={"1.5px"} w={"90%"} mt={"5%"} />
      </Center>
 
      <HStack justify={"center"} mt={"2%"} >

    

      <AspectRatio  w={{ base: "100%",
          xsm: "90%",
          ssm: "90%",
          sm: "90%",
          md: "90%",
          lg: "90%",
          xl: "90%  ",
          xxl: "90%",}}
          
          
          h={{ base: "300px",
          xsm: "300px",
          ssm: "400px",
          sm: "500px",
          md: "600px",
          lg: "600px",
          xl: "600px",
          xxl: "600px",}}>
<iframe  style={{borderRadius:"20px"}} width={"100%"}  height={"100%"} src="https://www.youtube.com/embed/NPwRWzpSxKU?si=EGE2YvVQ49Ql9e6K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


</AspectRatio>


        
      </HStack>

      <Center>
        <Divider borderWidth={"1.5px"} w={"90%"} mt={"5%"} />
      </Center>
 
 

    <HStack justify={"center"} alignSelf={"center"}> 

    <Box  p={"0%"} border={"1px solid black"}   w={"900px"} h={"348"} 
      borderRadius={"10px"} >


    </Box>
      <Box    p={"0%"}  >

      <Wrap
      display={"flex"}
      justifyContent={"center"}
    
     
      border={"1px solid black"}
  
 
      borderRadius={"10px"}
     
    >
      <div  > 
        <Text   padding={"10px"}>
        <Stat fontSize={"100px"} >
    <StatLabel fontSize={"25px"}>User Growth</StatLabel>
    <StatNumber  fontSize={"20px"}>5,345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      52.52%
    </StatHelpText>
  </Stat>

        </Text>

  
      <LineChart
      
          width={600}
          height={230}
          data={data}
          margin={{
            top:10,
            right: 25,
            left: 10,
            bottom:10 ,
          }}
        >

<XAxis dataKey="name" />

   
          <Tooltip   dataKey="name"  />

          <Line type="monotone"  dataKey="UserGrowth" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </div>
    </Wrap>

        


      </Box>
    </HStack>

    </>
  );
}


