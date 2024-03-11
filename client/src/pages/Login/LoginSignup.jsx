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

import LocationForm from "./components/LocationForm";

import BasicInfo from "./components/BasicInfo";
import CertsUpload from "./components/CertsUpload";
import ServiceCreation from "./components/ServiceCreation";
import ServiceSelection from "./components/ServiceSelection";
import StoreCreation from "./components/StoreCreation";
import CreationTabs from "./components/CreationTabs";
import UploadFile from "./components/UploadFile";
import VehicleInfo from "./components/VehicleInfo";
import AccountDashboard from "./components/AccountDashboard";
export default function LoginSignup({isAllowedToPass}) {
  const [faseOne, setFaseOne] = useState(true);
  const [faseTwo, setFaseTwo] = useState(true);
  const [faseThree, setFaseThree] = useState(true);
  const [faseFour, setFaseFour] = useState(true);
  const [faseFive, setFaseFive] = useState(true);
  const [faseSix, setFaseSix] = useState(true);
  const [faseSeven, setFaseSeven] = useState(false);


  const HandelNext = () =>{
  


  }

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
              <StepTitle>{step.title}</StepTitle>
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

  const FormProgression = () => {
    const Progression = [
      { condition: !faseOne, component: <BasicInfo /> },
      { condition: faseOne && !faseTwo, component: <LocationForm /> },
      { condition: faseTwo && !faseThree, component: <UploadFile /> },
      { condition: faseThree && !faseFour, component:  <ServiceSelection />  },
      { condition: faseFour && !faseFive, component:  <VehicleInfo />},
      { condition: faseFive && faseSix, component: <CertsUpload /> },
      { condition: faseSix && !faseSeven, component: <CreationTabs /> },
      { condition: faseSeven, component: <AccountDashboard /> }
    ];
  
    for (let i = 0; i < Progression.length; i++) {
      if (Progression[i].condition) {
        return Progression[i].component;
      }
    }
  };


  return (
    <>
      <Steper />

      <HStack justify={"center"} mb={"2%"}>
        <Heading fontSize={"70px"} fontFamily={"Raleway"}>
          Sign Up
        </Heading>
      </HStack>

      <FormProgression />
      <HStack justify={"center"}>
          <Button
          visibility={isAllowedToPass ? "hidden" : "visible"}
            mt={"20px"}
            borderRadius={"10px"}
            w={"30%"}
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
    </>
  );
}
