import {useState} from "react";
import {
  Step,
  StepDescription,
  Input,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
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

export default function LoginSignup() {
const [fromOne, setFormOne] = useState(null);

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

      {/* /Form */}

      <HStack justify={"center"} mb={"2%"}>
        <Heading fontSize={"70px"} fontFamily={"Raleway"}>
          Sign Up
        </Heading>
      </HStack>

    { fromOne ? ( <HStack justify={"center"} p={"0 5%"}>
        <Card
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
                    type="First Name"
                    placeholder="First Name"
                  />

                  <Input
                    fontSize={"20px"}
                    mb={"50px"}
                    borderRadius={"0%"}
                    border={"0px solid black "}
                    borderBottom="2px solid black" // Adjust the width and color as needed
                    type="Last Name"
                    placeholder="Last Name"
                  />
                </HStack>

                <Input
                  fontSize={"20px"}
                  mb={"50px"}
                  borderRadius={"0%"}
                  border={"0px solid black "}
                  borderBottom="2px solid black" // Adjust the width and color as needed
                  type="email"
                  placeholder="Email"
                />

                <Input
                  fontSize={"20px"}
                  mb={"50px"}
                  borderRadius={"0%"}
                  border={"0px solid black "}
                  borderBottom="2px solid black" // Adjust the width and color as needed
                  type="Password"
                  placeholder="Password"
                />
                <Input
                  fontSize={"20px"}
                  mb={"50px"}
                  borderRadius={"0%"}
                  border={"0px solid black "}
                  borderBottom="2px solid black" // Adjust the width and color as needed
                  type="Password"
                  placeholder="Confirm Password"
                />
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
      </HStack>

):(<>

<HStack justify={"center"} p={"0 5%"}>
        <Card
          maxW={"800px"}
          transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.02)",
            boxShadow: "0px  0px 1px rgb(0,0,0)",
          }}
        >
          <CardHeader>
            <HStack justify={"center"}></HStack>
          </CardHeader>
          <CardBody>
            <Stack padding={"0 60px"}>
              <FormControl>
              
                  <Input
                    fontSize={"20px"}
                    mb={"50px"}
                    borderRadius={"0%"}
                    border={"0px solid black "}
                    borderBottom="2px solid black" // Adjust the width and color as needed
                    type="Phone Number"
                    placeholder="Phone Number"
                  />

                  <Input
                    fontSize={"20px"}
                    mb={"50px"}
                    borderRadius={"0%"}
                    border={"0px solid black "}
                    borderBottom="2px solid black" // Adjust the width and color as needed
                    type="Street"
                    placeholder="Street"
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
                  type="State"
                  placeholder="State"
                />

                <Input
                  fontSize={"20px"}
                  mb={"50px"}
                  borderRadius={"0%"}
                  border={"0px solid black "}
                  borderBottom="2px solid black" // Adjust the width and color as needed
                  type="Zip Code"
                  placeholder="Zip Code"
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
                  type="Suburb"
                  placeholder="Suburb"
                />

                <Input
                  fontSize={"20px"}
                  mb={"50px"}
                  borderRadius={"0%"}
                  border={"0px solid black "}
                  borderBottom="2px solid black" // Adjust the width and color as needed
                  type="City"
                  placeholder="City"
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
      </HStack>



 </>)}











    </>
  );
}
