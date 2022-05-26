import "../Form/Form.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button, { ButtonProps } from "@mui/material/Button";
// import Form from "react-bootstrap/Form";
import TextField from "@mui/material/TextField";
export default function Form() {
  return (
    <>
      <div>
        <div className="form-head">
          <h4>Edit product</h4>
          <div>
            <ul>
              <li>
                <div className="text-li">Dashboard</div>
              </li>
              <li className="dots-li"></li>
              <li>
                <div>E-Commerce</div>
              </li>
              <li className="dots-li"></li>
              <li>
                <div className="text-li">E-Commerce</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-vahani">
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
            <div className="col-lg-4">
              <TextField
                id="outlined-basic"
                label="Mobile"
                variant="outlined"
                className="text-field"
                required
              />
            </div>
            <div className="col-lg-4">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="text-field"
                required
              />
            </div>
            <div className="col-lg-4">
              <TextField
                id="outlined-basic"
                label="Aadhar Card Number"
                variant="outlined"
                className="text-field"
                required
              />
            </div>
          </div>
          <div className="py-2">
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
              <select
                className="form-select "
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="py-2">
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="but-width-form">
            <Button variant="contained" className="but-login-vahani">
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
