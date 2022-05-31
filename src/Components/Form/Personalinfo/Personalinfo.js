import "../Personalinfo/Personalinfo.css";
import React, { useState, useContext } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button, { ButtonProps } from "@mui/material/Button";
import { AiOutlineCamera } from "react-icons/ai";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";

// import Form from "react-bootstrap/Form";
import TextField from "@mui/material/TextField";
export default function Form() {
  // select
  const [age, setAge] = React.useState("");

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };
  //select
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <div>
        <div className="form-head">
          <h4>Personal Information</h4>
          <p className="">
            Drop files here or click browse thorough your machine
          </p>
        </div>
        <div className="card-vahani">
          <div className="row">
            <div className="col-lg-3">
              <div className="image-card">
                <div className="img-file-form">
                  <div className="img-button">
                    <input
                      type="file"
                      onChange={handleChange}
                      className="input-file"
                    />
                    {!file ? (
                      <div className="upload">
                        <div>
                          <AiOutlineCamera />
                        </div>
                        <div style={{ fontSize: "0.8rem" }}>upload profile</div>
                      </div>
                    ) : (
                      <img src={file} alt="img" style={{ width: "100%" }} />
                    )}
                  </div>
                </div>
              </div>
              <div className="upload-info-personal">
                Upload Profile Photo
                <br />
                Maximum Size 2MB | File Format .png
              </div>
            </div>
            <div className="col-lg-9">
              <div>
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Student Id"
                  variant="filled"
                  defaultValue="121-15123-2022"
                  required
                  style={{ width: "100%" }}
                />
                <div className="row py-2">
                  <div className="col-lg-4">
                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                      className="text-field"
                      required
                    />
                  </div>
                  <div className="col-lg-4">
                    <TextField
                      id="outlined-basic"
                      label="Middle Name"
                      variant="outlined"
                      className="text-field"
                      required
                    />
                  </div>
                  <div className="col-lg-4">
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                      className="text-field"
                      required
                    />
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col-lg-6">
                    <TextField
                      id="outlined-basic"
                      label="Mobile"
                      variant="outlined"
                      className="text-field"
                      required
                      helperText="Some important text"
                    />
                  </div>
                  <div className="col-lg-6">
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      //   className="text-field"
                      variant="filled"
                      defaultValue="anupriya.juhi123@gmail.com"
                      disabled
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card-2 */}
        <div className="card-vahani" style={{ marginTop: "24px" }}>
          <div className="row py-2">
            <div className="col-lg-6">
              <TextField
                className="text-field"
                required
                id="date"
                label="Date of Birth"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="col-lg-6 form-auto">
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-6 form-auto">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  State Of Birth
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select1"
                  value={age}
                  label="State Of Birth"
                  onChange={handleChange2}
                  required
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-lg-6 form-auto">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  City Of Birth
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select2"
                  value={age}
                  label="City Of Birth"
                  onChange={handleChange2}
                  required
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-6">
              <TextField
                id="outlined-basic"
                label="Emergency Contact Number"
                variant="outlined"
                className="text-field"
                required
              />
            </div>
            <div className="col-lg-6 form-auto">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Which year will you start your college
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select3"
                  value={age}
                  label="Which year will you start your college?"
                  onChange={handleChange2}
                  required
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="card-vahani" style={{ marginTop: "24px" }}>
          <p className="Identification-Details">Identification Details</p>
          <div className="row py-2">
            <div className="col-lg-6">
              <TextField
                id="outlined-basic"
                label="Aadhar Card Number"
                variant="outlined"
                className="text-field"
                required
              />
            </div>
            <div className="col-lg-6">
              <TextField
                id="outlined-basic"
                label="Aadhar Card Number"
                variant="outlined"
                className="text-field"
                required
              />
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="card-vahani" style={{ marginTop: "26px" }}>
          <p className="Identification-Details"> Other Details</p>
          <div className="row py-2">
            <div className="col-lg-6 form-auto">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  How did you come to know about Vahani ?
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select1"
                  value={age}
                  label="How did you come to know about Vahani ?*"
                  onChange={handleChange2}
                  required
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-lg-6 form-auto">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Do you know any senior scholar in Vahani?*
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select2"
                  value={age}
                  label="Do you know any senior scholar in Vahani?*"
                  onChange={handleChange2}
                  required
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "24px 0px",
          }}
        >
          <div className="but-width-form">
            <Button variant="contained" className="but-login-vahani ">
              Save
            </Button>
          </div>
        </div>

        {/* form */}
      </div>
    </>
  );
}
