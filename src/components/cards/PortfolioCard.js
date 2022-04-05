import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useDispatch } from "react-redux";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function PortfolioCard() {
  const dispatch = useDispatch();
  const breakpointConfig = {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
  };

  return (
    <div className="card-portfolio">
      <h3>Portfolio</h3>
      <Swiper
        pagination={{
          type: "bullets",
        }}
        breakpoints={breakpointConfig}
        navigation={true}
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide className="project-container">
          <img
            src="https://source.unsplash.com/random"
            className="project-image"
            alt="thisProjectImage"
          ></img>
          <h2 className="project-title">[Game] Guess The Word</h2>
          <div className="project-techs">
            <div>
              <h3 className="tech-title">Techs</h3>
              <ul className="project-tech-list">
                <li className="project-list-item">HTML</li>
                <li className="project-list-item">CSS</li>
                <li className="project-list-item">ReactJS</li>
              </ul>
            </div>
            <button
              onClick={() =>
                dispatch({
                  type: "REDIRECT_PROJECT",
                  payload: "guessTheWord",
                })
              }
              className="project-button"
            >
              Visit Website
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="project-container">
          <img
            src="https://source.unsplash.com/random"
            className="project-image"
            alt="thisProjectImage"
          ></img>
          <h2 className="project-title">[Website] Método Hayat</h2>
          <div className="project-techs">
            <div>
              <h3 className="tech-title">Techs</h3>
              <ul className="project-tech-list">
                <li className="project-list-item">HTML</li>
                <li className="project-list-item">CSS</li>
                <li className="project-list-item">JavaScript</li>
              </ul>
            </div>
            <button
              onClick={() =>
                dispatch({
                  type: "REDIRECT_PROJECT",
                  payload: "metodoHayat",
                })
              }
              className="project-button"
            >
              Visit Website
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="project-container">
          <img
            src="https://source.unsplash.com/random"
            className="project-image"
            alt="thisProjectImage"
          ></img>
          <h2 className="project-title">[Utility] Classic Calculator</h2>
          <div className="project-techs">
            <div>
              <h3 className="tech-title">Techs</h3>
              <ul className="project-tech-list">
                <li className="project-list-item">HTML</li>
                <li className="project-list-item">CSS</li>
                <li className="project-list-item">ReactJS</li>
              </ul>
            </div>
            <button
              onClick={() =>
                dispatch({
                  type: "REDIRECT_PROJECT",
                  payload: "classicCalculator",
                })
              }
              className="project-button"
            >
              Visit Website
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="project-container">
          <img
            src="https://source.unsplash.com/random"
            className="project-image"
            alt="thisProjectImage"
          ></img>
          <h2 className="project-title">[Game] Classic Memory Game</h2>
          <div className="project-techs">
            <div>
              <h3 className="tech-title">Techs</h3>
              <ul className="project-tech-list">
                <li className="project-list-item">HTML</li>
                <li className="project-list-item">CSS</li>
                <li className="project-list-item">ReactJS</li>
              </ul>
            </div>
            <button
              onClick={() =>
                dispatch({
                  type: "REDIRECT_PROJECT",
                  payload: "memoryGame",
                })
              }
              className="project-button"
            >
              Visit Website
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PortfolioCard;
