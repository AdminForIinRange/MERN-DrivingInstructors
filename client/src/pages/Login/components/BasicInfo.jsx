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
import LoginSignup from "../LoginSignup";

export default function BasicInfo() {
  const [isAllowedToPass, setIsAllowedToPass] = useState(true);

 
 
  return (
    <>
   
  

    

    <HStack justify={"center"} p={"0 5%"}>
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
            
            </HStack>
          </CardBody>
        </Card>
      </HStack>

      <LoginSignup 

isAllowedToPass={isAllowedToPass}
      
      
      />




 











    </>
  );
}
