import "../Adminpanel/Mainsection/Mainsection";
import Scholar from "../../assets/Image/scholar.png";
import Scholar2 from "../../assets/Image/scholar2.png";
import React, { useState, useContext } from "react";

import "../Adminpanel/Slider/Slider.css";
import Cardwhite from "../Adminpanel/Mainsection/maincontent/Card/cardwhite";
import Cardcolor from "../Adminpanel/Mainsection/maincontent/Card/Cardcolor";
// import store from "../../../store";
import Table from "../Adminpanel/Mainsection/maincontent/Table/Tablesimple";
import Donutsg from "../Adminpanel/Mainsection/maincontent/Chart/donut";
import Arealine from "../Adminpanel/Mainsection/maincontent/Chart/Arealine";
import Bar from "../Adminpanel/Mainsection/maincontent/Chart/Bar";
import { HiUsers } from "react-icons/hi";
import Simplepie from "../../Components/Adminpanel/Mainsection/maincontent/Chart/Simplepie";

export default function Dashboard() {
  //   const { drawerWidth, Showdraw, setShowdraw } = useContext(store);
  //   const showdrawer = () => {
  //     setShowdraw(!Showdraw);
  //   };

  return (
    <>
      <div>
        <div className="row row-main-toppd m-0">
          <div className="col-md-8 main-top-left ">
            <div className="main-top-left-cont">
              <h4>Welcome back! Minimal UI</h4>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything.
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
              <div className="icon-main">
                <HiUsers style={{ fontSize: "1.5em" }} />
              </div>
              <h6>Total Active Users</h6>
              <h3>18,765</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          {" "}
          <div
            className="col-card-main"
            style={{ backgroundColor: "rgb(255, 231, 217)" }}
          >
            <div>
              <div className="icon-main">
                <HiUsers style={{ fontSize: "1.5em" }} />
              </div>
              <h6>Total Active Users</h6>
              <h3>18,765</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div
            className="col-card-main"
            style={{ backgroundColor: "rgb(255, 247, 205)" }}
          >
            <div className="icon-main">
              <HiUsers style={{ fontSize: "1.5em" }} />
            </div>
            <div>
              <h6>Total Active Users</h6>
              <h3>18,765</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 pe-0 ">
          <div className="col-card-main">
            <div className="icon-main">
              {" "}
              <HiUsers style={{ fontSize: "1.5em" }} />
            </div>
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
      </div>
      <div style={{ paddingTop: "28px" }}>
        {/* <Donutsg /> */}
        <div className="row">
          <div className="col-lg-4">
            <Donutsg />
          </div>
          <div className="col-lg-8">
            <Arealine />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "28px" }}>
        <div className="row">
          <div className="col-lg-4">
            <Simplepie />
          </div>
          <div className="col-lg-8">
            <Bar />
          </div>
        </div>
      </div>
    </>
  );
}
