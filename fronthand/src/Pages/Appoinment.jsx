
import React from "react";
import { Grid } from "@mui/material";
import { AppointmentTable } from "../Components/Table";


function AppointmentPage() {

    return (
      <div className="appointment-screen">
        <Grid>
          <AppointmentTable/>
        </Grid>
      </div>
    );
  }
  
  export default AppointmentPage;

  