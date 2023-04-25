import Navbar from "../Layouts/Navbar";
import bgImage from "../../assets/landingBg.png";
const NotLogin = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <img src={bgImage} alt="BackgroundImage" className="col-12 p-0" />
      </div>
    </div>
  );
};

export default NotLogin;
