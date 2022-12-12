import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isAuthenticated) {
    const { name, picture, nickname, email} = user;

    return (
       (
        <section style={{ backgroundcolor: "#eee" }} id="text">
          <div className="row vak">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src={picture} alt={name}></img>
                  <h5 className="my-3"> {nickname}</h5>
                  <p className="text-muted mb-1">member</p>
                  <p className="text-muted mb-4">golfclub (name) Belgium</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0"> {nickname}</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body" style={{ width: "250px" }}>
                    <img
                      src="images/logo.png"
                      alt="placeholder"
                      width="250px"
                      padding-top="100px"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      )
    );
  }
}

