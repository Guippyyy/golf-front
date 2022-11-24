import React from 'react'
import Navbar from "../components/navBar";

export default function Page(props) {

  return (
    <>
        <Navbar/>
        {props.children}
    </>
  )
}
