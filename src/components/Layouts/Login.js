import fbLogo from "../../assets/fbLogo.svg";
import googleLogo from "../../assets/googleLogo.svg";
import illustration from "../../assets/atg_illustration.svg";
import { useState } from "react";
const Login = (props) => {
  const showModal = props.showModal;
  const [showPassword, setShowPassword] = useState("password");
  const HandleFormSubmit = (e) => {
    const email = e.target.email.value;
    localStorage.setItem("AtgUser", JSON.stringify({ fullname: email }));
  };
  return (
    <div className="m-auto" style={{ width: "732px" }}>
      <div className="d-flex justify-content-end mb-2">
        <i
          className="bi bi-x-circle-fill cursor-pointer text-light"
          onClick={() => {
            props.HandleRegisterClick(showModal);
          }}
        ></i>
      </div>
      <div className="bg-light rounded ps-4 pe-4 pb-2 blur">
        <div
          className="text-center "
          style={{ backgroundColor: "#EFFFF4", borderRadius: "8px 8px 0 0", padding: "25px 0" }}
        >
          <p className=" m-0 " style={{ color: "#008A45", fontWeight: "500" }}>
            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
          </p>
        </div>
        <div className="container-fluid bg-light">
          <div className="row">
            <div className="col-6">
              <p className="fs-3 fw-bold text-black mt-3 mb-3">Sign In</p>
              <div className="container-fluid">
                <form onSubmit={(e) => HandleFormSubmit(e)}>
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
                      className="col-12 ps-3 border border-secondary"
                      type={`${showPassword}`}
                      placeholder="Password"
                      name="password"
                    />
                    {showPassword === "password" ? (
                      <i
                        className="bi bi-eye position-absolute cursor-pointer"
                        style={{ top: "255px", left: "330px" }}
                        onClick={() => setShowPassword("text")}
                      ></i>
                    ) : (
                      <i
                        className="bi bi-eye-slash position-absolute cursor-pointer"
                        style={{ top: "255px", left: "330px" }}
                        onClick={() => setShowPassword("password")}
                      ></i>
                    )}
                  </div>
                  <div className="row">
                    <button className="col-12 bg-primary rounded-pill border-0 text-light mt-3 mb-3 p-2" type="submit">
                      Sign In
                    </button>
                  </div>
                  <div className="row">
                    <button className="col-12 border border-bottom-0 border-secondary p-2">
                      <img className="pe-2 pb-1" src={fbLogo} alt="Logo" /> Sign In with Facebook
                    </button>
                  </div>
                </form>
                <div className="row">
                  <button className="col-12 border border-secondary p-2 ">
                    <img className="pe-2 pb-1" src={googleLogo} alt="Logo" />
                    Sign In with Google
                  </button>
                </div>
                <div className="row">
                  <p className="text-center mt-3" style={{ fontSize: "12px", fontWeight: "500" }}>
                    Forgot Password?
                  </p>
                </div>
              </div>
            </div>
            <div className=" container-fluid col-6">
              <div className="row text-end">
                <p className="col-12 mt-4" style={{ fontSize: "14px" }}>
                  Don't have an account yet?
                  <span className="text-primary fw-bold cursor-pointer" onClick={props.HandleSignupClick}>
                    Create new for free!
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
