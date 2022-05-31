import React, { useState, useEffect, useContext } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "../Slider/Slider.css";
import logo from "../../../assets/Image/vahanilogo.png";
import { BsChevronDoubleLeft } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";
import Header from "../Header/Header";
import Mainsection from "../Mainsection/Mainsection";
import store from "../../../store";
import { GoPrimitiveDot, GoChevronRight, GoChevronDown } from "react-icons/go";
// import { IoIosArrowDown } from "react-icons/io";
// IoIosArrowDown;

export default function Slider() {
  const { drawerWidth, setdrawerWidth, Showdraw, setShowdraw } =
    useContext(store);

  const [open, setOpen] = useState(true);
  const [subcat, setSubcat] = useState(false);
  const [topc, settopc] = useState("slidertop2");

  const handleDrawerOpen = () => {
    settopc("topcno");
    setOpen(false);
    setdrawerWidth(70);
  };
  const handleDrawerclose = () => {
    settopc("slidertop2");
    setOpen(true);
    setdrawerWidth(280);
  };

  const showsub = () => {
    setSubcat(!subcat);
  };
  return (
    <>
      <Header />
      <div className="drawer-laptop">
        <Drawer
          className="drawer-d"
          style={{ width: "drawerWidth", transition: " width 1s  all" }}
          sx={{
            flexShrink: 0,

            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <div className="swipe-col-dw">
            <div className="swipe-left-dw">
              <div onClick={handleDrawerclose}>
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "40px", height: "40px", cursor: "pointer" }}
                />
              </div>
              <div onClick={handleDrawerOpen}>
                <BsChevronDoubleLeft className="arrow-0pen" />
              </div>
            </div>
            <div>
              {/* <div className={topc}>
                <Avatar alt="Remy Sharp" src="" className="slider-top-21" />
                {open ? (
                  <div className="slider-top-213">
                    <h6 className="slider-top2134">Minimal UI</h6>
                    <p className="slider-top21345">admin</p>
                  </div>
                ) : null}
              </div> */}
            </div>
          </div>

          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon className="drawer-icon">
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon className="drawer-icon">
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon className="drawer-icon">
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            {/* up down */}
            <ListItem disablePadding onClick={showsub}>
              <ListItemButton>
                <ListItemIcon className="drawer-icon">
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
                {subcat ? (
                  <ListItemIcon className="drawer-icon-arrow">
                    <GoChevronDown style={{ fontSize: "1.8em" }} />
                  </ListItemIcon>
                ) : (
                  <ListItemIcon className="drawer-icon-arrow">
                    <GoChevronRight style={{ fontSize: "1.8em" }} />
                  </ListItemIcon>
                )}
              </ListItemButton>
            </ListItem>
            {subcat ? (
              <div>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon className="drawer-icon">
                      <GoPrimitiveDot />
                    </ListItemIcon>
                    <ListItemText primary="User" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon className="drawer-icon">
                      <GoPrimitiveDot />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>
              </div>
            ) : null}
            {/* updown */}
          </List>
        </Drawer>
      </div>

      {Showdraw ? (
        <div className="drawer-moblie">
          <Drawer
            className="drawer-d"
            style={{ width: "drawerWidth", transition: " width 1s  all" }}
            sx={{
              flexShrink: 0,

              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <div className="swipe-col-dw">
              <div className="swipe-left-dw">
                <div>
                  <img
                    src={logo}
                    alt="logo"
                    style={{ width: "40px", height: "40px", cursor: "pointer" }}
                  />
                </div>
                {/* <div onClick={handleDrawerOpen}>
                  <BsChevronDoubleLeft className="arrow-0pen" />
                </div> */}
              </div>
              <div>
                <div className={topc}>
                  <Avatar alt="Remy Sharp" src="" className="slider-top-21" />
                  {open ? (
                    <div className="slider-top-213">
                      <h6 className="slider-top2134">Minimal UI</h6>
                      <p className="slider-top21345">admin</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon className="drawer-icon">
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
        </div>
      ) : null}
      <Mainsection />
    </>
  );
}
