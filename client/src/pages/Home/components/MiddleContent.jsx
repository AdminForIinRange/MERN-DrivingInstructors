import React, { useState, useEffect } from "react";
import { useBreakpointValue, Grid, GridItem, Card,
    CardHeader,
    CardBody,
    
     Text, Heading } from "@chakra-ui/react";
import "../Home.css";

export default function MiddleContent() {
  const [selectedValueAsset, setSelectedValueAsset] = useState("Suburb");
  const [inputValue, setInputValue] = useState("");
  const [scrollPositions, setScrollPositions] = useState({
    div300: false,
    div700: false,
    div800: false,
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
    }, 30000); // Refresh content after 30 seconds

    return () => clearTimeout(timeout);
  }, [refreshKey]);
  return (
    <>
    
    
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
                    <Heading>5 Million Users</Heading>
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
                      expertise and Customers
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
</>
  )
}
