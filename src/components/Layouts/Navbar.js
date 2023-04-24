import logo from "../../assets/logo.svg";
import { useState } from "react";
const Navbar = () => {
  const [showLogin, setLogin] = useState(false);
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
          <div className=" text-center">
            Create account.
            <span className="text-primary fw-bold cursor-pointer" onClick={() => setLogin(!showLogin)}>
              It's free!
            </span>
          </div>
        </div>
      </div>
      {showLogin ? (
        <div
          className="bg-transparent position-absolute top-50 start-50 translate-middle"
          style={{ height: "513px", width: "766px" }}
        >
          <div className="d-flex justify-content-end">
            <i class="bi bi-x-circle-fill " onClick={() => setLogin(!showLogin)}></i>
          </div>
          <div className="mt-2" style={{ padding: "0 8px" }}>
            <div
              className="text-center "
              style={{ backgroundColor: "#EFFFF4", borderRadius: "8px 8px 0 0", padding: "25px 0" }}
            >
              <p className=" m-0 " style={{ color: "#008A45", fontWeight: "500" }}>
                Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
              </p>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <p className="fs-3 fw-bold text-black mt-3 mb-3">Create Account</p>
                  <div className="container-fluid">
                    <div className="row">
                      <input className="ps-3 col-6 " type="text" placeholder="First Name" />
                      <input className="col-6 ps-3" type="text" placeholder="Last Name" />
                    </div>
                    <div className="row">
                      <input className="col-12 ps-3" type="text" name="" id="" placeholder="Email" />
                    </div>
                    <div className="row">
                      <input className="col-12" type="password" name="" id="" placeholder="Password" />
                    </div>
                    <div className="row">
                      <input className="COL-12 ps-3" type="text" name="" id="" placeholder="Confirm Password" />
                    </div>
                  </div>
                </div>
                <div className="col-6"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* <Modal open={showModal} onCancel={() => setShowModal(false)} footer={false} className="Modal w-50">
        <div>
          <div className="text-center " style={{ backgroundColor: "#EFFFF4", height: "50px" }}>
            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
          </div>
        </div>
      </Modal> */}
    </div>
  );
};

export default Navbar;
