import { useState } from "react";
import {
  Step,
  StepDescription,
  Input,
  StepIcon,
  StepIndicator,
  StepNumber,
  Checkbox, CheckboxGroup ,
  StepSeparator,
  Textarea,
  StepStatus,
  StepTitle,
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
} from "@chakra-ui/react";

export default function VehicleInfo() {
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

  return (
    <>
      <Steper />

      <HStack justify={"center"} mb={"2%"}>
        <Heading fontSize={"70px"} fontFamily={"Raleway"}>
          Sign Up
        </Heading>
      </HStack>

      <HStack justify={"center"} p={"0 5%"} align={"start"} wrap={"wrap"} gap={"1%"} >
        
        <Card mb={"5%"}
          maxW={"800px"}
          transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.02)",
            boxShadow: "0px  0px 1px rgb(0,0,0)",
          }}
        >
          
          <CardBody>
            <Stack padding={"0 60px"}>
              <FormControl>
                
                <Input
                  fontSize={"20px"}
                  mb={"50px"}
                  borderRadius={"0%"}
                  border={"0px solid black "}
                  borderBottom="2px solid black" // Adjust the width and color as needed
                  type="Vehicle Type"
                  placeholder="Vehicle Type"
                />
                
                <HStack
                  gap={"10%"}
                  justify={"center"}
                  wrap={"nowrap"}
                  whiteSpace={"nowrap"}
                >
                  
                  <Input
                    fontSize={"20px"}
                    mb={"50px"}
                    borderRadius={"0%"}
                    border={"0px solid black "}
                    borderBottom="2px solid black" // Adjust the width and color as needed
                    type="Make"
                    placeholder="Make"
                  />

                  <Input
                    fontSize={"20px"}
                    mb={"50px"}
                    borderRadius={"0%"}
                    border={"0px solid black "}
                    borderBottom="2px solid black" // Adjust the width and color as needed
                    type="Model"
                    placeholder="Model"
                  />
                </HStack>
                <HStack
                  gap={"10%"}
                  justify={"center"}
                  wrap={"nowrap"}
                  whiteSpace={"nowrap"}
                >
                  <Input
                    fontSize={"20px"}
                    mb={"50px"}
                    borderRadius={"0%"}
                    border={"0px solid black "}
                    borderBottom="2px solid black" // Adjust the width and color as needed
                    type="Year"
                    placeholder="Year"
                  />

                  <Input
                    fontSize={"20px"}
                    mb={"50px"}
                    borderRadius={"0%"}
                    border={"0px solid black "}
                    borderBottom="2px solid black" // Adjust the width and color as needed
                    type="Vehicle Color"
                    placeholder="Vehicle Color"
                  />
                </HStack>

                <Input
                  fontSize={"20px"}
                  mb={"50px"}
                  borderRadius={"0%"}
                  border={"0px solid black "}
                  borderBottom="2px solid black" // Adjust the width and color as needed
                  type="License Number"
                  placeholder="License Number"
                />
                <HStack
                  gap={"10%"}
                  justify={"center"}
                  wrap={"nowrap"}
                  whiteSpace={"nowrap"}
                >
                  <Input
                    fontSize={"20px"}
                    mb={"50px"}
                    borderRadius={"0%"}
                    border={"0px solid black "}
                    borderBottom="2px solid black" // Adjust the width and color as needed
                    type="Plate"
                    placeholder="Plate"
                  />

                  <Input
                    fontSize={"20px"}
                    mb={"50px"}
                    borderRadius={"0%"}
                    border={"0px solid black "}
                    borderBottom="2px solid black" // Adjust the width and color as needed
                    type="VIN"
                    placeholder="VIN"
                  />
                  
                </HStack>
                
              </FormControl>
              
            </Stack>
            

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
            
          </CardBody>

          
          
        </Card>

        <Card
          maxW={"800px"}
          transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.02)",
            boxShadow: "0px  0px 1px rgb(0,0,0)",
          }}
        >
          
          <CardBody>
          <HStack justify={"center"}>
          <Stack padding={"0 20px"}>
            <FormControl>
              <Text mb={"10px"}>Upload License for Vehicle</Text>

              <Box
                border="2px dashed #aaa"
                borderRadius="md"
                padding="60px"
                textAlign="center"
                onDrop={handleFileDrop}
                onDragOver={handleDragOver}
              >
                <input
                  type="file"
                  id="fileInput"
                  accept=".png, .jpg, .jpeg, .pdf" // Specify accepted file types
                  style={{ display: "none" }}
                  onChange={handleFileSelect}
                />
                <label htmlFor="fileInput">
                  <Text fontSize="lg" cursor="pointer">
                    {selectedFile
                      ? `File: ${selectedFile.name}`
                      : "Drag & Drop or Click to Upload"}
                  </Text>
                </label>
              </Box>

              <Text p={"20px 0px"}>Extra Information </Text>

              <Textarea
                h={"120px"}
                value={additionalInfo}
                onChange={handleAdditionalInfoChange}
                placeholder="Enter additional information..."
              />
              
            <HStack mt={"5%"} justify={"center"}>
              <Button
                borderRadius={"10px"}
                w={"80%"}
                fontSize={"30px"}
              
                p={"30px 30px"}
                variant="solid"
                colorScheme="gray"
                mb={"3%"}
              >
                <Checkbox defaultChecked  size='lg' >  <Text  fontSize={"20px"}>

                Upload For Review
                  
                  </Text> </Checkbox>
              </Button>
              
            </HStack>
            </FormControl>
          </Stack>
        </HStack>
          </CardBody>
          </Card>

       
       
      </HStack>
    </>
  );
}
