import Navbar from "../Layouts/Navbar";
import bgImage from "../../assets/landingBg.png";
import PostFeed from "../Layouts/PostFeed";
const NotLogin = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <Navbar />
      </div>
      <div className="row ">
        <img src={bgImage} alt="BackgroundImage" className="col-12 p-0" />
        <div className="text-light position-absolute top-50  " style={{ left: "200px" }}>
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      <PostFeed />
    </div>
  );
};

export default NotLogin;
