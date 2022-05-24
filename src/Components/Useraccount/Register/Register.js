import "../Login/Login.css";
import scholar from "../../../assets/Image/scholar.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button, { ButtonProps } from "@mui/material/Button";
import logo from "../../../assets/Image/vahanilogo.png";
import "./Register.css";

export default function Register() {
  return (
    <>
      <div>
        <div className="row" style={{ margin: "0px" }}>
          <div className="head">
            <div>
              <img
                src={logo}
                alt="logo"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <div>
              <p className="link-register">
                Already have an account? <a href="">Login</a>
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-4 desktop"
            style={{ padding: "16px", height: "100vh" }}
          >
            <div className="left-con-login">
              <h3>Manage the scholarship more effectively with vahani</h3>
              <div className="left-mg-log">
                <img src={scholar} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="right-col-register">
              <div>
                <div className="right-col-login-div">
                  <h4>Welcome!</h4>
                  <p>Apply for a Scholarship</p>
                </div>
                <div className="text-field">
                  <div
                    className="row"
                    // style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="col-md-4 col-12">
                      <TextField
                        required
                        id="outlined-required"
                        label="First Name"
                        variant="outlined"
                        className="text-field-input "
                      />
                    </div>
                    <div className="col-md-4 col-12">
                      <TextField
                        required
                        id="outlined-basic"
                        label="Middle Name"
                        variant="outlined"
                        className="text-field-input "
                      />
                    </div>
                    <div className="col-md-4 col-12">
                      <TextField
                        required
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        className="text-field-input "
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <TextField
                        required
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        className="text-field-input"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <TextField
                        required
                        id="outlined-basic"
                        label="Confirm Email"
                        variant="outlined"
                        className="text-field-input"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <TextField
                        required
                        id="outlined-basic"
                        label="Mobile"
                        variant="outlined"
                        className="text-field-input mg-textfield"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <TextField
                        required
                        id="outlined-basic"
                        label="Confirm Mobile"
                        variant="outlined"
                        className="text-field-input "
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <TextField
                    required
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    className="text-field-input"
                  />
                  <div className="flex-label-login">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="are you in 12th class?*"
                    />
                  </div>
                  <Button variant="contained" className="but-login-vahani ">
                    Register
                  </Button>
                  <p className="css-399fq3 ">
                    Copyright © 2022 Vahani Scholarship. All rights reserved.
                    Powered by Global Trendz
                  </p>
                  <div className="mobile-link-register">
                    <p className="link-register-mobile">
                      Already have an account? <a href="">Login</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
