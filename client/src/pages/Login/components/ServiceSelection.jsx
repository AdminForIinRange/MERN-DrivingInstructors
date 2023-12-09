//watch a 8h react tut, 1 from free code, one from that moren desgin guy and one from bob ziroll
// total 24 hours, / itto a week and you will be more expeiced then 80% in one week beacuse u allredy kknow react fairly well
//compalete this project firstt
import { useState } from "react";
import {
  Step,
  StepDescription,
  Input,
  StepIcon,
  StepIndicator,
  StepNumber,
  Checkbox,
  CheckboxGroup,
  Icon,
  StepSeparator,
  Textarea,
  StepStatus,
  StepTitle,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stepper,
  HStack,
  Heading,
  InputGroup,
  Card,
  CardHeader,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  CardBody,
  Highlight,
  CardFooter,
  Divider,
  AspectRatio,
  ButtonGroup,
  Center,
  Flex,
  Button,
  Text,
  Stack,
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
  useSteps,
  AbsoluteCenter,
  Spacer,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
export default function ServiceSelection() {
  const [customBtn, setCustomBtn] = useState([]);

  
  const handleAddCustomService = () => {
    // Get the value from the input field
    const customService = document.getElementById("customServiceInput").value;

    if (customService) {
      // Add the custom service to the customBtn array
      setCustomBtn((prevState) => [...prevState, customService]);

      // Clear the input field after adding the service
      document.getElementById("customServiceInput").value = "";
    }
  };



  const handleRemoveCustomService = (indexToRemove) => {
    // Filter out the service at the provided index
    const updatedCustomBtn = customBtn.filter(
      (_, index) => index !== indexToRemove
    );
    setCustomBtn(updatedCustomBtn);
  };



  const [fromOne, setFormOne] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleAdditionalInfoChange = (event) => {
    setAdditionalInfo(event.target.value);
  };
  const steps = [
    { title: "First", description: "Contact Info" },
    { title: "Second", description: "Date & Time" },
    { title: "Third", description: "Select Rooms" },
  ];
  function Steper() {
    const { activeStep } = useSteps({
      index: 3,
      count: steps.length,
    });

    return (
      <Stepper
        index={activeStep}
        p={"20px 10%"}
        display={"flex"}
        flexWrap={"wrap"}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle fontSize={"20px"}>{step.title}</StepTitle>
              <StepDescription fontSize={"15px"}>
                {step.description}
              </StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    );
  }

  const FrontbuttonData = [
    "Performance Tuning/Racing Services",
    "Rental",
    "Instruction/Training",
    "Vehicle Restoration",
    "Parts/Accessories Sales",
    "Repair/Maintenance",
    "Towing",

    // Add more services here
  ];

  const buttonData = [
    "Detailing/Cleaning",
    "Customization/Modification",
    "Insurance/Financing Services",
    "Recycling/Disposal",
    "Car Audio/Entertainment Installation",
    "Upholstery/Interior Repairs",
    "Glass/Windshield Services",
    "Roadside Assistance",
    "Painting Services",
    "Wheel/Tire Services",
    "Diagnostic Services",
    "Battery Services",
    "Collision Repair",
    "Car Wash",
    "Security/Alarm Installation",
    // Add more services here
  ];

  return (
    <>
      <Steper />

      <HStack justify={"center"} mb={"2%"}>
        <Heading fontSize={"70px"} fontFamily={"Raleway"}>
          Sign Up
        </Heading>
      </HStack>

      <HStack justify={"center"} p={"0 2%"}>
        <Card
          maxW={"900px"}
          transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.02)",
            boxShadow: "0px  0px 1px rgb(0,0,0)",
          }}
        >
          <CardBody>
            <Stack padding={"0 30px"}>
              <FormControl>
                <Heading as="h4" size="md" p={"20px 0px"}>
                  What Services do you plan to offer:
                </Heading>
                <Wrap>
                  {FrontbuttonData.map((Frontbutton, index) => (
                    <Button
                      zIndex={"2"}
                      key={index}
                      value={FrontbuttonData}
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
                      colorScheme="gray"
                      variant="outline"
                      size="sm"
                    >
                      {Frontbutton}
                    </Button>
                  ))}
                </Wrap>

                <Accordion
                  borderTop="white"
                  mt="10px"
                  defaultIndex={[0]}
                  allowMultiple
                >
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          See More Options
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Wrap>
                        {buttonData.map((button, index) => (
                          <Button
                         
                            key={index}
                            value={button} // Assuming FrontbuttonData holds the value for each button
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
                            colorScheme="gray"
                            variant="outline"
                            size="sm"
                          >
                            {button}
                          </Button>
                        ))}
                      </Wrap>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                <HStack mt={"20px"}>
                  <Input
                    id="customServiceInput"
                    fontSize={"20px"}
                    mb={"50px"}
                    borderRadius={"0%"}
                    border={"0px solid black "}
                    borderBottom="2px solid black" // Adjust the width and color as needed
                    type="text"
                    placeholder="Custom Services"
                  />

                  <Button
                    onClick={handleAddCustomService}
                    borderRadius={"10px"}
                    w={"5%"}
                    fontSize={"20px"}
                    bgColor={"#00BF63"}
                    p={"20px 30px"}
                    variant="solid"
                    colorScheme="whatsapp"
                    mb={"3%"}
                  >
                    Add
                  </Button>
                </HStack>

                {customBtn.map((customService, index) => (
                  <Button
                    key={index}
                    value={FrontbuttonData} // Assuming FrontbuttonData holds the value for each button
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
                    colorScheme="gray"
                    variant="outline"
                    size="sm"

                    // other button properties...
                  >
                    {customService}

                    <Button
                      onClick={() => handleRemoveCustomService(index)}
                      borderRadius={"5px"}
                      h={"12px"}
                      fontSize={"20px"}
                      variant="solid"
                      colorScheme="red"
                      ml={"10px"}
                    ></Button>
                  </Button>
                ))}

              </FormControl>
              <HStack justify={"center"}>
              <Button
                borderRadius={"10px"}
                w={"80%"}
                fontSize={"30px"}
                bgColor={"#00BF63"}
                p={"30px 30px"}
                variant="solid"
                colorScheme="whatsapp"
                mb={"3%"}
              >
                Next
              </Button>
            </HStack>

            </Stack>
          </CardBody>
        </Card>
      </HStack>
    </>
  );
}
