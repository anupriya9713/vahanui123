import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { AllInbox } from "@mui/icons-material";
import "./Slider/Slider.css";
import logo from "../../assets/Image/vahanilogo.png";
import { BsChevronDoubleLeft } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";
import Profile from "./Header/Header";
import { BiSearch } from "react-icons/bi";
import Mainsection from "./Mainsection/Mainsection";
import Drawers from "./Slider/Slider";
// const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const [open, setOpen] = React.useState(true);
  const [drawerWidth, setdrawerWidth] = React.useState(280);
  const [topc, settopc] = useState("slidertop2");
  const [header, setHeader] = useState("header");
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
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar
        className={header}
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <div className="header-pd">
          <div className="bisearch">
            <BiSearch />
          </div>
          <div>
            <Profile />
          </div>
        </div>
      </AppBar> */}
      <Drawers />
      {/* <Drawer
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
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon className="drawer-icon">
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                {open ? <ListItemText primary={text} /> : null}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer> */}
      <Box
        component="main"
        // sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}

        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          // p: 7,
          flexGrow: 1,
          bgcolor: "background.default",
        }}
      >
        <Toolbar />
        <Typography style={{ padding: "48px" }}>
          <Mainsection />
        </Typography>
        <div
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
    </Box>
  );
}
