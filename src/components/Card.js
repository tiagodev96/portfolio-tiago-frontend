import React from "react";
import "../styles/card.css";
import HomeCard from "./cards/HomeCard";
import ContactCard from "./cards/ContactCard";
import PortfolioCard from "./cards/PortfolioCard";
import { useSelector } from "react-redux";

function Card() {
  const state = useSelector((state) => {
    return {
      page: state.page,
    };
  });

  function renderPage() {
    let isPageHome = state.page === "HOME";
    let isPagePortfolio = state.page === "PORTFOLIO";
    let isPageContact = state.page === "CONTACT";

    if (isPageHome) return <HomeCard></HomeCard>;
    if (isPagePortfolio) return <PortfolioCard></PortfolioCard>;
    if (isPageContact) return <ContactCard></ContactCard>;
    return;
  }

  return (
    <>
      <section className="card">{renderPage()}</section>
    </>
  );
}

export default Card;
