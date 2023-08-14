import React, { useState } from "react";
import Footer from "./Footer";

import Card from "./DonationCard";
import Table from "./Table";

export default function Finance() {
  return (
    <>
      <div className="container">
        <br />
        <br />
        <Table />
        <br />
        <Card />
        <br />
      </div>
      <Footer />
    </>
  );
}
