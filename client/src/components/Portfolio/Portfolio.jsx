import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WebDev from "../../img/webdev.jpg";
import Stock from "../../img/stock.jpg";
import Music from "../../img/music.jpg";
import tiktok from "../../img/tiktok.jpg";
import youtuber from "../../img/youtuber.jpg";
import dance from "../../img/dance.jpg";
import motionArtists from "../../img/motionArtists.jpg";
import andmore from "../../img/andmore.png";
import { themeContext } from "../../Context";
import { Typography } from "@mui/material";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>
        Find your interests
      </span>
      <span>We will help you find or create your own interests</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={motionArtists} alt="" />
          <Typography>Motion Artists</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={WebDev} alt="" />
          <Typography>Web development</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Music} alt="" />
          <Typography>Musics</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={tiktok} alt="" />
          <Typography>Tiktoker</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={youtuber} alt="" />
          <Typography>Youtuber</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Stock} alt="" />
          <Typography>Stock Investment</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={dance} alt="" />
          <Typography>Performer</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={andmore} alt="" />
          <Typography>And More,,!</Typography>
        </SwiperSlide>
      </Swiper>

      <a
        href="https://forms.gle/8byKgwRBMM8oaKdGA"
        target="_blank"
        rel="noreferrer"
      >
        <button className="button i-buttonn">Let us know your interests</button>
      </a>
    </div>
  );
};

export default Portfolio;
