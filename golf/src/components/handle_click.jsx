import React from "react";
import { useState } from "react";

export default function HandleClick({ children }) {
  const [show, setShow] = useState();

  function toggleShow() {
    setShow(!show);
  }

  return (
    <>
      {!show && children}
      <button
        type="button"
        className="btn btn-primary btn-sm"
        id="button"
        onClick={toggleShow}
      >
        HOLES 1-9
      </button>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        id="button"
        onClick={toggleShow}
      >
        HOLES 1-9
      </button>
    </>
  );
}
