import React from "react";
import PageHeader from "../../components/global/PageHeader";
import Question from "./component/Question";

const Faq = () => {
  return (
    <main>
      <PageHeader title="FAq" breadCrumb="Faq" />
      <Question />
    </main>
  );
};

export default Faq;
