import React from "react";
import { Container } from "@mui/material";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./contentLayout.scss";

export default function ContentLayout(props) {
  return (
    <div className="page">
      <Header />
      <div className="contentLayout">
        <Container maxWidth="xl" className="contentLayoutContainer">
          {props.children}
        </Container>
      </div>
      <Footer isVisablePagination={props.isVisablePagination} />
    </div>
  );
}
