import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

export default function CommonLayout(prop) {
  return (
    <div>
      <Header />
      <div style={{ padding: "0 8%", marginTop: "1%" }}>{prop.children}</div>
      <Footer />
    </div>
  );
}
