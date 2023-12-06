import {
  Flex,
  Button,
  Box,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Wrap,
  Grid,
  GridItem,
  Text,
  Image,
  Stack,
  InputLeftElement,
  InputLeftAddon,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  MenuItemOption,
  MenuOptionGroup,
  HStack,
  InputGroup,
  Select,
  Container,
  ButtonGroup,
  Divider,
  
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom"
import { HamburgerIcon } from "@chakra-ui/icons";
import './Navbar.css'

export default function Navbar() {
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });

  return (
  
    <>





    <Flex 
      fontSize="xs"
      as="nav"
      flexDirection="row"
      justifyContent={isSmallScreen ? "right" : "Center"}
      alignItems="center"

      
     
     
    >




      <Box className="NavBar">
        <Flex  justifyContent="center" alignItems="center"  p="5px" gap={"25px"}>
          {isSmallScreen ? (
            <Menu>
              <MenuButton as={Button}  color={"black"} variant='outline'>
                <HamburgerIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>Main</MenuItem>
                <MenuItem>AboutUs</MenuItem>
                <MenuItem>Watch List</MenuItem>
                <MenuItem>Dashboard</MenuItem>
                <MenuItem>Settings</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Wrap className="NavBar"   >
             <NavLink to="/" > 
             <Button fontSize="sm"   color={"Black"} variant='ghost' w="auto">
                Main
              </Button>

             </NavLink>
             <NavLink to="Services" >
             <Button fontSize="sm"  color={"Black"} variant='ghost' w="auto">
             Services
              </Button>

             </NavLink>
             <NavLink to="Login/Signup">
             <Button fontSize="sm"  color={"Black"} variant='ghost' w="auto">
             Login
              </Button>

             </NavLink>
             <NavLink to="WatchList">
             <Button fontSize="sm"  color={"Black"} variant='ghost' w="auto">
             WatchList
              </Button>

             </NavLink>
             <NavLink to="Dashboard">
             <Button fontSize="sm"  color={"Black"} variant='ghost' w="auto">
             Dashboard
              </Button>

             </NavLink>
             <NavLink to="Account">
             <Button fontSize="sm"  color={"Black"} variant='ghost' w="auto">
             Account
              </Button>

             </NavLink>



            </Wrap>
          )}

        </Flex>
        <Divider />
      </Box>
      
    </Flex>
    
    </>
  )
}
