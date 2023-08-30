import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import { Hero_Banner_Data } from "../../../data/constant";
import { RightUpArrow } from "../../../common/SVG_Icons"; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    dotsClass: `slick-dots hero_dots`,
  };

  return (
    <>
      <Slider {...settings} className="hero-slider">
        {Hero_Banner_Data.map(
          ({ id, bannerImg, title, contentText, btnText, path }) => {
            return (
              <div className="banner_wrapper" key={id}>
                <div
                  data-bg={bannerImg}
                  className="hero-img lazyload"
                  style={{ backgroundImage: `url(${bannerImg})` }}
                >
                  <Box className="imgData">
                    <Box className="contentBox">
                      <div className="imgTitle">
                        <pre>
                          <Typography variant="h1" color="text.primary">
                            {title}
                          </Typography>
                        </pre>
                      </div>
                      <Box className="descText">
                        <pre>
                          <Typography
                            variant="body1"
                            color="text.primary"
                            fontSize={{ xs: "0.75rem", sm: "1rem" }}
                          >
                            {contentText}
                          </Typography>
                        </pre>
                      </Box>
                    </Box>

                    <Box mt={0} width={'max-content'}>
                      <NavLink to={path}>
                        <button className="img_btn">
                          <Typography
                            variant="button"
                            color="text.primary"
                            fontSize={{ xs: "0.875rem", sm: "1rem" }}
                          >
                            {btnText}
                          </Typography>
                          <RightUpArrow fill={'#FFFFFF'} />
                        </button>
                      </NavLink>
                    </Box>
                  </Box>
                </div>
              </div>
            );
          }
        )}
      </Slider>
    </>
  );
};

export default HeroSlider;
