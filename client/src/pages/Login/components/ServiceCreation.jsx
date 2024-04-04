//watch a 8h react tut, 1 from free code, one from that moren desgin guy and one from bob ziroll
// total 24 hours, / itto a week and you will be more expeiced then 80% in one week beacuse u allredy kknow react fairly well
//compalete this project firstt
import { useState } from "react";
import {
  Badge,
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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
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
  VStack,
} from "@chakra-ui/react";
import { TfiMoney } from "react-icons/tfi";
import { AddIcon } from "@chakra-ui/icons";
export default function ServiceCreation() {
  return (
    <>
      <Tabs variant="enclosed">
        <HStack justify={"center"}>
          <TabList>
            <Tab>Services</Tab>
            <Tab>Store</Tab>
          </TabList>
        </HStack>

        <TabPanels>
          <TabPanel>
            <HStack justify={"center"} gap={"2%"} align={"start"} wrap={"wrap"}>
              <Card
                mb={"2%"}
                maxW={"800px"}
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.02)",
                  boxShadow: "0px  0px 1px rgb(0,0,0)",
                }}
              >
                <CardBody>
                  <Stack padding={"5px 20px"}>
                    <FormControl>
                      <VStack justify={"center"}>
                        <Heading as="h4" size="lg">
                          Basic
                        </Heading>

                        <Divider />
                      </VStack>

                      <VStack justify={"center"} mt={"10px"} gap={"10px"}>
                        <HStack>
                          <Text>$</Text>
                          <Input
                            textAlign={"center"}
                            borderRadius={"0%"}
                            border={"0px solid black "}
                            borderBottom="2px solid black" // Adjust the width and color as needed
                            type="text"
                            placeholder="Price"
                          />
                        </HStack>

                        <Input
                          textAlign={"center"}
                          borderRadius={"0%"}
                          border={"0px solid black "}
                          borderBottom="2px solid black" // Adjust the width and color as needed
                          type="text"
                          placeholder="Condition (not required)"
                        />

                        <Textarea
                          fontSize={"15px"}
                          mt={"10px"}
                          h={"5px"}
                          placeholder="What are you offering, Exmaple: 1 hour driving lesson"
                        />
                        <Button colorScheme="red" size="xs">
                          Remove
                        </Button>
                        <Textarea
                          fontSize={"15px"}
                          h={"5px"}
                          placeholder="What are you offering, Exmaple: 1 hour driving lesson"
                        />
                        <Button colorScheme="red" size="xs">
                          Remove
                        </Button>
                        <Button colorScheme="green" size={"sm"}>
                          Add more
                        </Button>
                      </VStack>
                    </FormControl>
                  </Stack>
                </CardBody>
              </Card>
              <Card
                mb={"2%"}
                maxW={"800px"}
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.02)",
                  boxShadow: "0px  0px 1px rgb(0,0,0)",
                }}
              >
                <CardBody>
                  <Stack padding={"5px 20px"}>
                    <FormControl>
                      <VStack justify={"center"}>
                        <Heading as="h4" size="lg">
                          Standard
                        </Heading>

                        <Divider />
                      </VStack>

                      <VStack justify={"center"} mt={"10px"} gap={"10px"}>
                        <HStack>
                          <Text>$</Text>
                          <Input
                            textAlign={"center"}
                            borderRadius={"0%"}
                            border={"0px solid black "}
                            borderBottom="2px solid black" // Adjust the width and color as needed
                            type="text"
                            placeholder="Price"
                          />
                        </HStack>
                        <Input
                          textAlign={"center"}
                          borderRadius={"0%"}
                          border={"0px solid black "}
                          borderBottom="2px solid black" // Adjust the width and color as needed
                          type="text"
                          placeholder="Condition (not required)"
                        />

                        <Textarea
                          fontSize={"15px"}
                          mt={"10px"}
                          h={"5px"}
                          placeholder="What are you offering, Exmaple: 1 hour driving lesson"
                        />
                        <Button colorScheme="red" size="xs">
                          Remove
                        </Button>
                        <Textarea
                          fontSize={"15px"}
                          h={"5px"}
                          placeholder="What are you offering, Exmaple: 1 hour driving lesson"
                        />
                        <Button colorScheme="red" size="xs">
                          Remove
                        </Button>
                        <Button colorScheme="green" size={"sm"}>
                          Add more
                        </Button>
                      </VStack>
                    </FormControl>
                  </Stack>
                </CardBody>
              </Card>
              <Card
                mb={"2%"}
                maxW={"800px"}
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.02)",
                  boxShadow: "0px  0px 1px rgb(0,0,0)",
                }}
              >
                <CardBody>
                  <Stack padding={"5px 20px"}>
                    <FormControl>
                      <VStack justify={"center"}>
                        <Heading as="h4" size="lg">
                          Advanced
                        </Heading>

                        <Divider />
                      </VStack>

                      <VStack justify={"center"} mt={"10px"} gap={"10px"}>
                        <HStack>
                          <Text>$</Text>
                          <Input
                            textAlign={"center"}
                            borderRadius={"0%"}
                            border={"0px solid black "}
                            borderBottom="2px solid black" // Adjust the width and color as needed
                            type="text"
                            placeholder="Price"
                          />
                        </HStack>
                        <Input
                          textAlign={"center"}
                          borderRadius={"0%"}
                          border={"0px solid black "}
                          borderBottom="2px solid black" // Adjust the width and color as needed
                          type="text"
                          placeholder="Condition (not required)"
                        />

                        <Textarea
                          mt={"10px"}
                          h={"5px"}
                          fontSize={"15px"}
                          placeholder="What are you offering, Exmaple: 1 hour driving lesson, Exmaple: 1 hour driving lesson "
                        />
                        <Button colorScheme="red" size="xs">
                          Remove
                        </Button>
                        <Textarea
                          fontSize={"15px"}
                          h={"5px"}
                          placeholder="What are you offering, Exmaple: 1 hour driving lesson"
                        />
                        <Button colorScheme="red" size="xs">
                          Remove
                        </Button>
                        <Button colorScheme="green" size={"sm"}>
                          Add more
                        </Button>
                      </VStack>
                    </FormControl>
                  </Stack>

                  <HStack justify={"center"}></HStack>
                </CardBody>
              </Card>
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
