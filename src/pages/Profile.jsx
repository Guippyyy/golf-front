import React from "react";
import LogoutButton from "../components/Logout";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
    <section style={{ backgroundcolor: "#eee" }} id="text">
        <div className="row vak">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                src={user.picture} alt={user.name}
                  // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6.webp"
                  // // src="images/people.svg"
                  // // src="images/helmet-wallpapers-28627-1101838.jpg"
                  // // src="/images/blondes_22.png"
                  // alt="avatar"
                  // className="rounded-circle img-fluid"
                  // style={{ width: "150px" }}
                ></img>
                <h5 className="my-3"> {user.nickname}</h5>
                <p className="text-muted mb-1">member</p>
                <p className="text-muted mb-4">golfclub (name) Belgium</p>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <LogoutButton/>
                </ul>
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
                    <p className="text-muted mb-0"> {user.nickname}</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.email}</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Home Club</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(097) 234-5678</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.phone_number}</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body" style={{ width: "200px" }}>
                    <img
                      src="images/logo.png"
                      alt="placeholder"
                      width="310px"
                      padding-top="100px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
    )
  );
  
}
