import { useState } from "react";
import {
  Step,
  StepDescription,
  Input,
  StepIcon,
  StepIndicator,
  StepNumber,
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
  Checkbox,
  MenuItem,
  Wrap,
  Grid,
  GridItem,
  Image,
  useSteps,
  AbsoluteCenter,
} from "@chakra-ui/react";

export default function UploadFile() {
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

  return (
    <>
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
                <Text p={"20px 0px"}>Profile Picture:</Text>

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
                <Text p={"20px 0px"}>Add Bio:</Text>

                <Textarea
                  h={"120px"}
                  value={additionalInfo}
                  onChange={handleAdditionalInfoChange}
                  placeholder="Enter additional information..."
                />
              </FormControl>
            </Stack>

            <HStack justify={"center"}>
              <Button
                borderRadius={"10px"}
                w={"80%"}
                fontSize={"30px"}
                bgColor={"gray.300"}
                p={"30px 30px"}
                variant="solid"
                colorScheme="gray"
                mb={"3%"}
                mt={"7%"}
              >
                <Checkbox size="lg" colorScheme="blue" defaultChecked>
                  Skip
                </Checkbox>
              </Button>
            </HStack>
          </CardBody>
        </Card>
      </HStack>
    </>
  );
}
