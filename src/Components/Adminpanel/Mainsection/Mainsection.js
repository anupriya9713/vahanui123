import "./Mainsection.css";
import Scholar from "../../../assets/Image/scholar.png";
import Scholar2 from "../../../assets/Image/scholar2.png";

export default function Mainsection() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-8 main-top-left">
            <div className="main-top-left-cont">
              <h4>Welcome back! Minimal UI</h4>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything.
              </p>
            </div>
            <div className="main-top-right-cont">
              <img src={Scholar} alt="Scholar" />
            </div>
          </div>
          <div className="col-md-4 main-top-right">
            <img src={Scholar2} alt="Scholar" />
          </div>
        </div>
      </div>
    </>
  );
}
