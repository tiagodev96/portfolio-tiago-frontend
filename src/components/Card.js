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
    switch (state.page) {
      case "HOME":
        return <HomeCard></HomeCard>;
      case "PORTFOLIO":
        return <PortfolioCard></PortfolioCard>;
      case "CONTACT":
        return <ContactCard></ContactCard>;
      default:
        return <HomeCard></HomeCard>;
    }
  }

  return (
    <>
      <section className="card">{renderPage()}</section>
    </>
  );
}

export default Card;
