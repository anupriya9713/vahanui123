import React, { useState, useEffect, useContext, createContext } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
// import "../Slider/Slider.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { BsClockHistory } from "react-icons/bs";
import { Widthdrawer } from "../Slider/Slider";
import AppBar from "@mui/material/AppBar";
import "../Slider/Slider.css";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import "../Header/Header.css";
import { FaBars } from "react-icons/fa";
import store from "../../../store";
export const showd = createContext();

export default function Header() {
  const { drawerWidth, Showdraw, setShowdraw } = useContext(store);
  const [header, setHeader] = useState("header");

  const [anchorEl, setAnchorEl] = React.useState(false);
  const open1 = Boolean(anchorEl);
  const [anchorE2, setAnchorE2] = React.useState(false);
  const open2 = Boolean(anchorE2);
  const handleClick = () => {
    setAnchorEl(!anchorEl);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClicknotification = () => {
    setAnchorE2(!anchorE2);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };
  const showdrawer = () => {
    setShowdraw(!Showdraw);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <div className="appbar-desktop">
        <AppBar
          className={header}
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <div className="header-pd">
            <div>
              {/* <BiSearch /> */}
              <div className="form-header">
                <div>
                  <ul>
                    <li>
                      <div className="text-li">Dashboard</div>
                    </li>
                    <li className="dots-li"></li>
                    <li>
                      <div className="text-li">E-Commerce</div>
                    </li>
                    <li className="dots-li"></li>
                    <li>
                      <div className="text-li">E-Commerce</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "space-between",
                  width: "150px",
                }}
              >
                <div>
                  <IconButton className="badge">
                    <Badge badgeContent={4}>
                      <MailIcon style={{ color: "#637381" }} />
                    </Badge>
                  </IconButton>
                </div>
                <div>
                  <IconButton
                    className="badge"
                    onClick={handleClicknotification}
                    size="small"
                    aria-controls={open2 ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open2 ? "true" : undefined}
                  >
                    <Badge badgeContent={4}>
                      <NotificationsIcon style={{ color: "#637381" }} />
                    </Badge>
                  </IconButton>
                  <Menu
                    className="profile-popup2"
                    anchorEl={anchorE2}
                    id="account-menu"
                    open={open2}
                    onClose={handleClose2}
                    onClick={handleClose2}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 2,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <div className="profile-name1">
                      <h6>Notification</h6>
                      <p>You have 2 unread messages</p>
                    </div>
                    <hr className="hr-di" />
                    <MenuItem className="menu-noti">
                      <div>
                        <Avatar style={{ width: "28px", height: "28px" }} />
                      </div>
                      <div className="profile-name2">
                        <h6>your order is placed</h6>
                        <p>
                          <BsClockHistory />

                          <span style={{ marginLeft: "0.5em" }}>1 day ago</span>
                        </p>
                      </div>
                    </MenuItem>

                    <MenuItem className="menu-noti">
                      <div>
                        <Avatar style={{ width: "28px", height: "28px" }} />
                      </div>
                      <div className="profile-name2">
                        <h6>your order is placed</h6>
                        <p>
                          <BsClockHistory />

                          <span style={{ marginLeft: "0.5em" }}>1 day ago</span>
                        </p>
                      </div>
                    </MenuItem>
                    <MenuItem className="menu-noti">
                      <div>
                        <Avatar style={{ width: "28px", height: "28px" }} />
                      </div>
                      <div className="profile-name2">
                        <h6>your order is placed</h6>
                        <p>
                          <BsClockHistory />

                          <span style={{ marginLeft: "0.5em" }}>1 day ago</span>
                        </p>
                      </div>
                    </MenuItem>
                    <MenuItem className="menu-noti">
                      <div>
                        <Avatar style={{ width: "28px", height: "28px" }} />
                      </div>
                      <div className="profile-name2">
                        <h6>your order is placed</h6>
                        <p>
                          <BsClockHistory />

                          <span style={{ marginLeft: "0.5em" }}>1 day ago</span>
                        </p>
                      </div>
                    </MenuItem>
                    <MenuItem className="menu-noti">
                      <div>
                        <Avatar style={{ width: "28px", height: "28px" }} />
                      </div>
                      <div className="profile-name2">
                        <h6>your order is placed</h6>
                        <p>
                          <BsClockHistory />

                          <span style={{ marginLeft: "0.5em" }}>1 day ago</span>
                        </p>
                      </div>
                    </MenuItem>
                    <hr className="hr-di" />
                    <div className="viewall-noti">View all</div>
                  </Menu>
                </div>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open1 ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open1 ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                className="profile-popup"
                anchorEl={anchorEl}
                id="account-menu"
                open={open1}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 2,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <div className="profile-name1">
                  <h6>Anu priya</h6>
                  <p>anupriya.juhi123@gmail.com</p>
                </div>

                <Divider />
                <MenuItem>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </AppBar>
      </div>
      <div className="appbar-mobile" onClick={showdrawer}>
        <AppBar
          className={header}
          position="fixed"
          sx={{
            width: `calc(100%)`,
          }}
        >
          <div className="header-pd">
            <div>
              <IconButton>
                <FaBars onClick={showdrawer} />
              </IconButton>
              <IconButton className="bisearch">
                <BiSearch />
              </IconButton>
            </div>
            <div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "space-between",
                  width: "150px",
                }}
              >
                <div>
                  <IconButton className="badge">
                    <Badge badgeContent={4}>
                      <MailIcon style={{ color: "#637381" }} />
                    </Badge>
                  </IconButton>
                </div>
                <div>
                  <IconButton
                    className="badge"
                    onClick={handleClicknotification}
                    size="small"
                    aria-controls={open2 ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open2 ? "true" : undefined}
                  >
                    <Badge badgeContent={4}>
                      <NotificationsIcon style={{ color: "#637381" }} />
                    </Badge>
                  </IconButton>
                  <Menu
                    className="profile-popup2"
                    anchorEl={anchorE2}
                    id="account-menu"
                    open={open2}
                    onClose={handleClose2}
                    onClick={handleClose2}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 2,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <div className="profile-name1">
                      <h6>Notification</h6>
                      <p>You have 2 unread messages</p>
                    </div>
                    <hr className="hr-di" />
                    <MenuItem className="menu-noti">
                      <div>
                        <Avatar style={{ width: "28px", height: "28px" }} />
                      </div>
                      <div className="profile-name2">
                        <h6>your order is placed</h6>
                        <p>
                          <BsClockHistory />

                          <span style={{ marginLeft: "0.5em" }}>1 day ago</span>
                        </p>
                      </div>
                    </MenuItem>

                    <MenuItem className="menu-noti">
                      <div>
                        <Avatar style={{ width: "28px", height: "28px" }} />
                      </div>
                      <div className="profile-name2">
                        <h6>your order is placed</h6>
                        <p>
                          <BsClockHistory />

                          <span style={{ marginLeft: "0.5em" }}>1 day ago</span>
                        </p>
                      </div>
                    </MenuItem>
                    <MenuItem className="menu-noti">
                      <div>
                        <Avatar style={{ width: "28px", height: "28px" }} />
                      </div>
                      <div className="profile-name2">
                        <h6>your order is placed</h6>
                        <p>
                          <BsClockHistory />

                          <span style={{ marginLeft: "0.5em" }}>1 day ago</span>
                        </p>
                      </div>
                    </MenuItem>
                    <MenuItem className="menu-noti">
                      <div>
                        <Avatar style={{ width: "28px", height: "28px" }} />
                      </div>
                      <div className="profile-name2">
                        <h6>your order is placed</h6>
                        <p>
                          <BsClockHistory />

                          <span style={{ marginLeft: "0.5em" }}>1 day ago</span>
                        </p>
                      </div>
                    </MenuItem>
                    <MenuItem className="menu-noti">
                      <div>
                        <Avatar style={{ width: "28px", height: "28px" }} />
                      </div>
                      <div className="profile-name2">
                        <h6>your order is placed</h6>
                        <p>
                          <BsClockHistory />

                          <span style={{ marginLeft: "0.5em" }}>1 day ago</span>
                        </p>
                      </div>
                    </MenuItem>
                    <hr className="hr-di" />
                    <div className="viewall-noti">View all</div>
                  </Menu>
                </div>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open1 ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open1 ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                className="profile-popup"
                anchorEl={anchorEl}
                id="account-menu"
                open={open1}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 2,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <div className="profile-name1">
                  <h6>Anu priya</h6>
                  <p>anupriya.juhi123@gmail.com</p>
                </div>

                <Divider />
                <MenuItem>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </AppBar>
      </div>
    </>
  );
}

// const Bar = styled.div`
//   @media (max-width: 450px) {
//     background: red !important;
//     margin-left: 0px !important;
//     width: 100% !important;
// }
//   }
// `;
