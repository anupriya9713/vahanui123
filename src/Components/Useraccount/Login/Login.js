import "../Login/Login.css";
import scholar from "../../../assets/Image/scholar2.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button, { ButtonProps } from "@mui/material/Button";
import logo from "../../../assets/Image/vahanilogo.png";

export default function Login() {
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
                Don’t have an account? <a href="">Get started</a>
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-4 desktop"
            style={{ padding: "16px", height: "100vh" }}
          >
            <div className="left-con-login">
              <h3>Hi, Welcome Back</h3>
              <div className="left-mg-log">
                <img src={scholar} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="right-col-login">
              <div>
                <div className="right-col-login-div">
                  <h4>Sign in to Vahani</h4>
                  <p>Enter your details below.</p>
                </div>
                <div className="text-field">
                  <TextField
                    id="outlined-basic"
                    label="Email address"
                    variant="outlined"
                    className="text-field-input"
                  />

                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    className="text-field-input"
                  />
                  <div className="flex-label-login">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Remember me"
                    />
                    <div>Forgot password?</div>
                  </div>
                  <Button variant="contained" className="but-login-vahani">
                    Login
                  </Button>
                  <div className="mobile-link-register">
                    <p className="link-register-mobile">
                      Don’t have an account? <a href="">Get started</a>
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
