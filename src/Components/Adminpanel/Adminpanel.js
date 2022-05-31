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
import Header from "./Header/Header";
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

      <Drawers />
    </Box>
  );
}
