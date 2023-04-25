const Register = (props) => {
  const showModal = props.showModal;
  return (
    <div
      className="bg-transparent position-absolute top-50 start-50 translate-middle"
      style={{ height: "513px", width: "766px" }}
    >
      <div className="d-flex justify-content-end">
        <i
          class="bi bi-x-circle-fill cursor-pointer"
          onClick={() => {
            props.HandleRegisterClick(showModal);
          }}
        ></i>
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
  );
};

export default Register;
