import "./Mainsection.css";
import Scholar from "../../../assets/Image/scholar.png";
import Scholar2 from "../../../assets/Image/scholar2.png";
import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "../Slider/Slider.css";
import Cardwhite from "./maincontent/Card/cardwhite";
import Cardcolor from "./maincontent/Card/Cardcolor";
import store from "../../../store";
import Table from "./maincontent/Table/Tablesimple";
import Donutsg from "./maincontent/Chart/donut";
import Arealine from "./maincontent/Chart/Arealine";
import Bar from "./maincontent/Chart/Bar";
import Simplepie from "./maincontent/Chart/Simplepie";
import Dashboard from "../../Dashboard/Dashboard";
import { Route, Switch } from "react-router-dom";
import Form from "../../Form/Form";
import Persona from "../../Form/Personalinfo/Personalinfo";

export default function Mainsection() {
  const { drawerWidth, Showdraw, setShowdraw } = useContext(store);
  const showdrawer = () => {
    setShowdraw(!Showdraw);
  };

  return (
    <>
      <Box
        className="mobile-section"
        onClick={showdrawer}
        component="main"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,

          flexGrow: 1,
          bgcolor: "background.default",
        }}
      >
        <Toolbar />
        <Typography className="ty-pd">
          {/* <Dashboard />
          <Form /> */}
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/form" component={Form} exact />
            <Route path="/personalinformation" component={Persona} exact />
          </Switch>
        </Typography>

        <div
          className="footer-div"
          style={{
            backgroundColor: "rgb(32 101 209)",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            position: "fixed",
            bottom: "0px",
            padding: "10px 48px",
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <div> Powered by Global Trendz</div>
          <div>Copyright © 2021 Vahani </div>
        </div>
      </Box>
    </>
  );
}
