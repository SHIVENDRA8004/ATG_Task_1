import Navbar from "../Layouts/Navbar";
import PostFeed from "../Layouts/PostFeed";
const Logined = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <PostFeed />
      </div>
    </div>
  );
};

export default Logined;
