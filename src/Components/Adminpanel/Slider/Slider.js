import React, { useState, useEffect } from "react";

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

export default function Slider() {
  const [open, setOpen] = React.useState(true);
  const [drawerWidth, setdrawerWidth] = React.useState(280);
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

  return (
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
    </Drawer>
  );
}
