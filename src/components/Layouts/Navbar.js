import logo from "../../assets/logo.svg";
import Register from "./Register";
import { useState } from "react";
import pp_1 from "../../assets/profile/pp_1.png";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const HandleRegisterClick = (showModal) => {
    setShowModal(!showModal);
  };
  const user = JSON.parse(localStorage.getItem("AtgUser"));
  return (
    <div className="container-fluid">
      <div className="row align-items-center" style={{ height: "72px" }}>
        <div className="col-4">
          <img src={logo} alt="Logo" class="p-70 " style={{ height: "24px" }} />
        </div>
        <div className="col-4">
          <div className="input-group w-75 m-auto">
            <input
              type="text"
              className="form-control rounded-pill text-dark border-0"
              placeholder="Search for your favorite groups in ATG"
            />
            <i className="bi bi-search bg-transparent searchBtn"></i>
          </div>
        </div>
        <div className="col-4">
          {user ? (
            <div className=" d-flex align-items-center justify-content-center cursor-pointer">
              <div className="pe-2">
                <img src={pp_1} alt="Profile" />
              </div>
              <div className="fw-bold">{user.fullname}</div>
              <div>
                <i className="bi bi-caret-down-fill ps-2 text-dark "></i>
              </div>
            </div>
          ) : (
            <div className=" text-center">
              Create account.
              <span className="text-primary fw-bold cursor-pointer" onClick={() => setShowModal(!showModal)}>
                It's free!
                <i className="bi bi-caret-down-fill ps-1 text-dark "></i>
              </span>
            </div>
          )}
        </div>
      </div>
      {showModal ? <Register showModal={showModal} HandleRegisterClick={HandleRegisterClick} /> : ""}
    </div>
  );
};

export default Navbar;
