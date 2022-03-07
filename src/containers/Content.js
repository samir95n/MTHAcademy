import React from "react";
import { Grid } from "@mui/material";
import ContentLayout from "../HOC/layout/contentLayout/ContentLayout";

//redux
import { login } from "../store/actions/examActions";
import { connect, useSelector } from "react-redux";

import Start from "./contentPages/start/Start";
import Exam from "./contentPages/exam/Exam";
import Finish from "./contentPages/finish/Finish";

export default function Content() {
  const currrentPage = useSelector((state) => state.exam.currentPage);
  return (
    <>
      <ContentLayout>
        {currrentPage == "start" && <Start />}
        {currrentPage == "exam" && <Exam />}
        {currrentPage == "finish" && <Finish />}
      </ContentLayout>
    </>
  );
}
