import React from "react";
import "../styles/settings.css";
import { useAuth0 } from "@auth0/auth0-react";
import FormTournament from "../forms/form1";
import FormReservation from "../forms/form2";

export default function Play() {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <>
        <div className="vakMake">
          <div className="vak2">
            <h2 id="text">Next Weeks Tournament</h2>
            <div className="vak3">
              <FormTournament />
              <img src="/images/golf_vrouw.jpg" alt="#" className="grid-img"></img>
            </div>
            
          </div>

          <div className="vak2">
            <h2 id="text">Make reservation</h2>
            <div className="vak3">
              <FormReservation />
              <img src="/images/golf_man1.jpg" alt="#" className="grid-img"></img>
            </div>
          </div>
        </div>
      </>
    )
  );
}
