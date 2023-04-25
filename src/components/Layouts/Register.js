import fbLogo from "../../assets/fbLogo.svg";
import googleLogo from "../../assets/googleLogo.svg";
import illustration from "../../assets/atg_illustration.svg";
import { useState } from "react";
import Login from "./Login";
const Register = (props) => {
  const showModal = props.showModal;
  const [showPassword, setShowPassword] = useState("password");
  const [registerClass, setRegisterClass] = useState("d-block");
  const [loginClass, setLoginClass] = useState("d-none");
  const HandleSignInClicK = () => {
    setRegisterClass("d-none");
    setLoginClass("d-flex");
  };
  const HandleSignupClick = () => {
    setRegisterClass("d-block");
    setLoginClass("d-none");
  };
  const HandleFormSubmit = (e) => {
    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const fullname = firstname + " " + lastname;
    localStorage.setItem("AtgUser", JSON.stringify({ fullname: fullname }));
  };
  return (
    <div
      className="bg-transparent position-absolute start-50 top-50 translate-middle w-50"
      style={{ borderRadius: "8px" }}
    >
      <div className={`${registerClass}`}>
        <div className="d-flex justify-content-end mb-2">
          <i
            className="bi bi-x-circle-fill cursor-pointer"
            onClick={() => {
              props.HandleRegisterClick(showModal);
            }}
          ></i>
        </div>
        <div>
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
                  <form onSubmit={(e) => HandleFormSubmit(e)}>
                    <div className="row">
                      <input
                        className="ps-3 col-6 border border-end-0 border-bottom-0 border-secondary "
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                      />
                      <input
                        className="col-6 ps-3 border border-bottom-0 border-secondary"
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="row">
                      <input
                        className="col-12 ps-3 border border-bottom-0 border-secondary"
                        type="text"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="row">
                      <input
                        className="col-12 ps-3 border border-bottom-0 border-secondary"
                        type={`${showPassword}`}
                        name="password"
                        placeholder="Password"
                      />
                      {showPassword === "password" ? (
                        <i
                          className="bi bi-eye position-absolute cursor-pointer"
                          style={{ top: "275px", left: "330px" }}
                          onClick={() => setShowPassword("text")}
                        ></i>
                      ) : (
                        <i
                          className="bi bi-eye-slash position-absolute cursor-pointer"
                          style={{ top: "275px", left: "330px" }}
                          onClick={() => setShowPassword("password")}
                        ></i>
                      )}
                    </div>
                    <div className="row">
                      <input
                        className="col-12 ps-3 border border-secondary"
                        type="password"
                        name="confirm-pass"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="row">
                      <button
                        className="col-12 bg-primary rounded-pill border-0 text-light mt-3 mb-3 p-2"
                        type="submit"
                      >
                        Create Account
                      </button>
                    </div>
                  </form>
                  <div className="row">
                    <button className="col-12 border border-bottom-0 border-secondary p-2">
                      <img className="pe-2 pb-1" src={fbLogo} alt="Logo" /> Sign up with Facebook
                    </button>
                  </div>
                  <div className="row">
                    <button className="col-12 border border-secondary p-2 ">
                      <img className="pe-2 pb-1" src={googleLogo} alt="Logo" />
                      Sign up with Google
                    </button>
                  </div>
                </div>
              </div>
              <div className=" container-fluid col-6">
                <div className="row text-end">
                  <p className="col-12 mt-4" style={{ fontSize: "14px" }}>
                    Already have an account?
                    <span className="text-primary fw-bold cursor-pointer" onClick={HandleSignInClicK}>
                      Sign In
                    </span>
                  </p>
                </div>
                <div className="row ">
                  <img
                    className="ms-auto me-auto"
                    style={{ height: "320px", width: "320px" }}
                    src={illustration}
                    alt="Illustration"
                  />
                </div>
                <div className="row ">
                  <p className="col-12 text-center" style={{ fontSize: "11px" }}>
                    By signing up, you agree to our Terms & conditions, Privacy policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${loginClass}`}>
        <Login
          showModal={showModal}
          HandleRegisterClick={props.HandleRegisterClick}
          HandleSignupClick={HandleSignupClick}
        />
      </div>
    </div>
  );
};

export default Register;
