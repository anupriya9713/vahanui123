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
          <Dashboard />
          <Form />
          {/* <Switch>
            <Route path="/dashboard" component={Dashboard} exact />
          </Switch> */}
          {/* <div>
            <div className="row row-main-toppd m-0">
              <div className="col-md-8 main-top-left ">
                <div className="main-top-left-cont">
                  <h4>Welcome back! Minimal UI</h4>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything.
                  </p>
                </div>
                <div className="main-top-right-cont">
                  <img src={Scholar} alt="Scholar" />
                </div>
              </div>
              <div className="col-md-4 main-top-right pe-0 ">
                <img src={Scholar2} alt="Scholar" />
              </div>
            </div>
          </div>

          <div className="row m-0" style={{ paddingTop: "28px" }}>
            <div className="col-md-3 ps-0 ">
              <div className="col-card-main">
                <div>
                  <div className="icon-main">hii</div>
                  <h6>Total Active Users</h6>
                  <h3>18,765</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              {" "}
              <div className="col-card-main">
                <div>
                  <div className="icon-main">hii</div>
                  <h6>Total Active Users</h6>
                  <h3>18,765</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="col-card-main">
                <div className="icon-main">hii</div>
                <div>
                  <h6>Total Active Users</h6>
                  <h3>18,765</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 pe-0 ">
              <div className="col-card-main">
                <div className="icon-main">hii</div>
                <div>
                  <h6>Total Active Users</h6>
                  <h3>18,765</h3>
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "28px" }}>
            <Cardwhite />
          </div>
          <div style={{ paddingTop: "28px" }}>
            <Cardcolor />
          </div>
          <div style={{ paddingTop: "28px" }}>
            <Table />
          </div> */}
          {/* <div style={{ paddingTop: "28px" }}>
           
            <div className="row">
              <div className="col-lg-4">
                <Donutsg />
              </div>
              <div className="col-lg-8">
                <Arealine />
              </div>
            </div>
          </div> */}
          {/* <div style={{ paddingTop: "28px" }}>
            <div className="row">
              <div className="col-lg-4">
                <Simplepie />
              </div>
              <div className="col-lg-8">
                <Bar />
              </div>
            </div>
          </div> */}
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
