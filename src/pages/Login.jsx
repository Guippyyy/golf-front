import React from "react";
import "./Login.css";
import "../App.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  let navigate = useNavigate();

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="px-5 ms-xl-4">
                <i
                  className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                  style={{ Color: "#709085" }}
                ></i>
                <span className="h1 fw-bold mb-0"></span>
              </div>

              <div
                className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5"
                id="mrg"
              >
                <span className="box-form" style={{ backgroundColor: "white" }}>
                  <form style={{ width: "23rem" }}>
                    <h3
                      className="fw-normal mb-3 pb-3"
                      style={{ letterSpacing: "1px" }}
                    >
                      Log in
                    </h3>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example18"
                        className="form-control form-control-lg"
                        placeholder="Email Address"
                      />
                      <label
                        className="form-label"
                        for="form2Example18"
                      ></label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example28"
                        className="form-control form-control-lg"
                        placeholder="password"
                      />
                      <label
                        className="form-label"
                        for="form2Example28"
                      ></label>
                    </div>

                    <div className="pt-1 mb-4">
                      <button
                        className="btn btn-info btn-lg btn-block"
                        type="button"
                        onClick={() => {
                          navigate("/profile");
                        }}
                      >
                        Login
                      </button>
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-muted" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <p>
                      Don't have an account?{" "}
                      <a href="#!" className="link-info">
                        Register here
                      </a>
                    </p>
                  </form>
                </span>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block"></div>
          </div>
        </div>
      </section>
    </>
  );
}
