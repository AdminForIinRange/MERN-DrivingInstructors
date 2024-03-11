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
export default function CreationTabs() {

  const [additionalInfo, setAdditionalInfo] = useState("");
 
  const [selectedFiles, setSelectedFiles] = useState({
    file1: null,
    file2: null,
    file3: null,
    file4: null,
  });


  const handleAdditionalInfoChange = (event) => {
    setAdditionalInfo(event.target.value);
  };

  const handleFileSelect = (event, inputId) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFiles({ ...selectedFiles, [inputId]: file });
    }
  };

  const handleFileDrop = (event, inputId) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFiles({ ...selectedFiles, [inputId]: file });
    }
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  

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
          <TabPanel>None</TabPanel>
          <TabPanel>
            <HStack justify={"center"} align={"strat"} wrap={"wrap"}>
              <VStack>
              <Box
        border="2px dashed #aaa"
        borderRadius="md"
        padding="60px"
        maxH={"300px"}
        maxW={"300px"}
        textAlign="center"
        onDrop={(event) => handleFileDrop(event, 'file1')}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          id="fileInput1"
          accept=".png, .jpg, .jpeg, .pdf"
          style={{ display: "none" }}
          onChange={(event) => handleFileSelect(event, 'file1')}
        />

        <label htmlFor="fileInput1">
          {selectedFiles.file1 ? (
            <img
              src={URL.createObjectURL(selectedFiles.file1)}
              alt="Uploaded File"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                marginBottom: "10px",
              }}
            />
          ) : (
            <Text fontSize="lg" cursor="pointer">
              Drag & Drop or Click to Upload Product Images
            </Text>
          )}
        </label>
      </Box>
      <Box
        border="2px dashed #aaa"
        borderRadius="md"
        padding="60px"
        maxH={"300px"}
        maxW={"300px"}
        textAlign="center"
        onDrop={(event) => handleFileDrop(event, 'file2')}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          id="fileInput2"
          accept=".png, .jpg, .jpeg, .pdf"
          style={{ display: "none" }}
          onChange={(event) => handleFileSelect(event, 'file2')}
        />

        <label htmlFor="fileInput2">
          {selectedFiles.file2 ? (
            <img
              src={URL.createObjectURL(selectedFiles.file2)}
              alt="Uploaded File"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                marginBottom: "10px",
              }}
            />
          ) : (
            <Text fontSize="lg" cursor="pointer">
              Drag & Drop or Click to Upload Product Images
            </Text>
          )}
        </label>
      </Box>
              </VStack>

              <VStack>
              <Box
        border="2px dashed #aaa"
        borderRadius="md"
        padding="60px"
        maxH={"300px"}
        maxW={"300px"}
        textAlign="center"
        onDrop={(event) => handleFileDrop(event, 'file3')}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          id="fileInput3"
          accept=".png, .jpg, .jpeg, .pdf"
          style={{ display: "none" }}
          onChange={(event) => handleFileSelect(event, 'file3')}
        />

        <label htmlFor="fileInput3">
          {selectedFiles.file3 ? (
            <img
              src={URL.createObjectURL(selectedFiles.file3)}
              alt="Uploaded File"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                marginBottom: "10px",
              }}
            />
          ) : (
            <Text fontSize="lg" cursor="pointer">
              Drag & Drop or Click to Upload Product Images
            </Text>
          )}
        </label>
      </Box>
      <Box
        border="2px dashed #aaa"
        borderRadius="md"
        padding="60px"
        maxH={"300px"}
        maxW={"300px"}
        textAlign="center"
        onDrop={(event) => handleFileDrop(event, 'file4')}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          id="fileInput4"
          accept=".png, .jpg, .jpeg, .pdf"
          style={{ display: "none" }}
          onChange={(event) => handleFileSelect(event, 'file4')}
        />

        <label htmlFor="fileInput4">
          {selectedFiles.file4 ? (
            <img
              src={URL.createObjectURL(selectedFiles.file4)}
              alt="Uploaded File"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                marginBottom: "10px",
              }}
            />
          ) : (
            <Text fontSize="lg" cursor="pointer">
              Drag & Drop or Click to Upload Product Images
            </Text>
          )}
        </label>
      </Box>
              </VStack>

              <VStack>
                <Input
                  fontSize={"20px"}
                  mb={"20px"}
                  borderRadius={"0%"}
                  border={"0px solid black "}
                  borderBottom="2px solid black" // Adjust the width and color as needed
                  type="Product name"
                  placeholder="Product name"
                />
                <Input
                  fontSize={"20px"}
                  mb={"20px"}
                  borderRadius={"0%"}
                  border={"0px solid black "}
                  borderBottom="2px solid black" // Adjust the width and color as needed
                  type="Price"
                  placeholder="Price"
                />

                <Textarea
                  h={"120px"}
                  value={additionalInfo}
                  onChange={handleAdditionalInfoChange}
                  placeholder="Product Description"
                />

                <HStack mt={"20px"}>
                  <Input
                    id="customTagInput"
                    fontSize={"20px"}
                    mb={"50px"}
                    borderRadius={"0%"}
                    border={"0px solid black "}
                    borderBottom="2px solid black" // Adjust the width and color as needed
                    type="text"
                    placeholder="Small Description"
                  />
                  

                </HStack>
              </VStack>
            </HStack>
          </TabPanel>
        </TabPanels>
       
      </Tabs>
    </>
  );
}
