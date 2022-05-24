import { BsFillPeopleFill } from "react-icons/bs";
import "./cardwhite.css";
function Cardwhite() {
  return (
    <div className="row m-0">
      <div className="col-md-4 p-0">
        <div className="col-card">
          <div className="col-card-left">
            <h6>Total Active Users</h6>
            <h3>18,765</h3>
          </div>
          <div
            className="col-card-right"
            style={{ minHeight: "36px", fontSize: "1.5rem" }}
          >
            <div>
              <BsFillPeopleFill />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="col-card">
          <div className="col-card-left">
            <h6>Total Active Users</h6>
            <h3>18,765</h3>
          </div>
          <div
            className="col-card-right"
            style={{ minHeight: "36px", fontSize: "1.5rem" }}
          >
            <div>
              <BsFillPeopleFill />
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 p-0">
        <div className="col-card">
          <div className="col-card-left">
            <h6>Total Active Users</h6>
            <h3>18,765</h3>
          </div>
          <div
            className="col-card-right"
            style={{ minHeight: "36px", fontSize: "1.5rem" }}
          >
            <div>
              <BsFillPeopleFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardwhite;
