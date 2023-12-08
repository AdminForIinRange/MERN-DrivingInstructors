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
    Highlight,
    CardFooter,
    AspectRatio,
    ButtonGroup,
    Center,
  } from "@chakra-ui/react";
  import { NavLink } from "react-router-dom";
  import { PureComponent } from "react";

  import "../Home.css";
  import {
    PhoneIcon,
    Search2Icon,
    ChevronDownIcon,
    UpDownIcon,
    ChatIcon,
    CheckIcon,
  } from "@chakra-ui/icons";
  
  import {
    FaShare,
    FaCheck,
    FaComment,
    FaInstagram,
    FaYoutube,
    FaLinkedin,
  } from "react-icons/fa";

  import Car3d from "../../../assets/Images/3d car.png";
  import Workplace3D from "../../../assets/Images/3d workplace.png";
  import Office3d from "../../../assets/Images/Office 3d.png";
  

export default function NavBox() {


    const LocalWidth = {

        base: "300px",
        xsm: "350px",
        ssm: "500px",
        sm: "600px",
        md: "600px",
        lg: "800px",
        xl: "350px",
        xxl: "400px",
        xxxl: "400px",
        

        

    }

    const LocalHeight = {
        base: "150px",
        xsm: "150px",
        ssm: "150px",
        sm: "130px",
        md: "130px",
        lg: "130px",
        xl: "300px",
        xxl: "300px",
        xxxl: "300px",
      }


      const LoaclColumn = {
        base: "9/10",
        xsm: "9/10",
        ssm: "9/10",
        sm: "9/10",
        md: "9/10",
        lg: "9/10",
        xl: "5/10",
        xxl: "6/10",

      }
      const LoaclRow = {
        base: "8/10",
        xsm: "8/10",
        ssm: "8/10",
        sm: "2/10",
        md: "2/10",
        lg: "2/10",
        xl: "9/10  ",
        xxl: "9/10",

      }
      



  return (
    <>
    
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
        mt={{
          base: "5%",
          xsm: "5%",
          ssm: "4%",
          sm: "3%",
          md: "2%",
          lg: "2%",
          xl: "2%",
          xxl: "2%",
          xxxl: "2%",
        }}
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
            w={LocalWidth}
            h={LocalHeight}
          >
            <Grid
              templateColumns={"repeat(10, 1fr) "}
              templateRows={"repeat(10, 1fr) "}
              gridTemplate={"repeat(10, 1fr)"}
            >
              <GridItem
                gridColumn={LoaclColumn}
                gridRow={LoaclRow}
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
            w={LocalWidth}
            h={LocalHeight}
          >
            <Grid
              templateColumns={"repeat(10, 1fr) "}
              templateRows={"repeat(10, 1fr) "}
              gridTemplate={"repeat(10, 1fr)"}
            >
              <GridItem
                gridColumn={LoaclColumn}
                gridRow={LoaclRow}
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
            w={LocalWidth}
            h={LocalHeight}
          >
            <Grid
              templateColumns={"repeat(10, 1fr) "}
              templateRows={"repeat(10, 1fr) "}
              gridTemplate={"repeat(10, 1fr)"}
            >
              <GridItem
                gridColumn={LoaclColumn}
                gridRow={LoaclRow}
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
      </HStack></>
  )
}
