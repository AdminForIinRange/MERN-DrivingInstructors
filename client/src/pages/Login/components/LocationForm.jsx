import { useState } from "react";
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

export default function LocationForm() {
  return (
    <>
      <HStack justify={"center"} p={"0 5%"}>
        <Card
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
            <Stack padding={"0 6px"}>
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
          </CardBody>
        </Card>
      </HStack>
    </>
  );
}
