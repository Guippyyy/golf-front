import React from 'react'
import "../App.css";
// import { useNavigate } from "react-router-dom";

export default function History() {
    return ( 
    <>
        
        <div className="container py-5">
        
            <div className="row">
                <div className="col">
                <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <a href="/">Scorecard</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        <a href="/profile"> profile</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current= "page">
                        <a href="/history">history</a>
                    </li>
                </ol>
                </nav>
                </div>
            </div>
        </div>
        <div className="col d-flex justify-content-center">
        <div className="col-lg-9">
            <div className="card mb-6">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-5">
                    <p className="mb-4"></p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0"></p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">\</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0"></p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">/</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">/</p>
                  </div>
                </div>
                <hr></hr>
                
                </div>
                <hr></hr>
                
              </div>
              </div>
            </div>
            
        </>
    );
}