import React from "react";
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div style={{position:"fixed", width:"100%", height :"50px",bottom:"0px"}}>
      <MDBFooter backgroundColor="#690aa8" className="text-left text-lg-left" color="white">
        <div
          className="text-left p-3"
          style={{ backgroundColor: "#690aa8" }}
        >
          &copy; {new Date().getFullYear()} Copyright{" "}DK OFFICIAL
          {/* <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a> */}
        </div>
      </MDBFooter>
    </div>
  );
}
