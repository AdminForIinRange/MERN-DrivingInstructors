import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
// components
import Navbar from "../components/Navbar.jsx";

export default function RootLayout() {
  return (
    <div className="Layout">
      <Grid>
        <GridItem>
          <Navbar />
        </GridItem>

        <GridItem></GridItem>
      </Grid>

      <Outlet />
    </div>
  );
}
