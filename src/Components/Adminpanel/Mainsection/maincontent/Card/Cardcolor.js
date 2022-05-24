import { BsFillPeopleFill } from "react-icons/bs";
import "./cardcolor.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillBarChartFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";

function Cardcolor() {
  return (
    <div className="row m-0">
      <div className="col-md-4 p-0">
        <div className="col-card-color">
          <div className="col-card-color-1">
            <BsFillBarChartFill
              style={{ fontSize: "2rem", color: "rgb(32 101 209)" }}
            />
          </div>
          <div className="col-card-color-2">
            <h4>38,566</h4>
            <p>Conversion</p>
          </div>
          <div className="col-card-color-3">
            <div>
              <BsFillPersonFill className="bs-fill" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div
          className="col-card-color"
          style={{ backgroundColor: "rgb(122, 79, 1)" }}
        >
          <div className="col-card-color-1">
            <BsFillBarChartFill
              style={{ fontSize: "2rem", color: "#aa7805" }}
            />
          </div>
          <div className="col-card-color-2">
            <h4>38,566</h4>
            <p>Conversion</p>
          </div>
          <div className="col-card-color-3">
            <div>
              <MdMail className="bs-fill" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 p-0">
        <div className="col-card-color">
          <div className="col-card-color-1">
            <BsFillBarChartFill style={{ fontSize: "2rem" }} />
          </div>
          <div className="col-card-color-2">
            <h4>38,566</h4>
            <p>Conversion</p>
          </div>
          <div className="col-card-color-3">
            <div>
              <BsFillPersonFill className="bs-fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardcolor;
