import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { QuoteBanner } from "../../components/Banners/Banners";
import { BannerImages_Data } from "../../data/images";
import {
  Aarogyasutram_3Ps_Data,
  FounderIntro,
  OurStory_Data,
  Team_Details,
} from "../../data/constant";
import { Title } from "../../components/Title/Title";
import { Button } from "../../common/BookingBtn";
import CardSlider from "../../components/Sliders/Card_Slider/CardSlider";
import Accordion from "../../components/Accordion/Accordion";

const About = () => {
  const { aboutBanner, quoteBanner } = BannerImages_Data;
  const { heroImg, name, education, introText } = FounderIntro;
  return (
    <>
      {/* hero-banner */}
      <section className="section">
        <Container maxWidth="xl">
          <div className="imgBox">
            <img data-src={aboutBanner} alt="" className="lazyload" />
          </div>
        </Container>
      </section>

      {/* founder-introduction section */}
      <section className="section">
        <Title title={"Founder Introduction"} />

        <Container maxWidth="xl">
          <Container maxWidth="lg">
            <Grid
              container
              justifyContent="center"
              columnSpacing={4}
              rowGap={4}
            >
              <Grid item lg={4.5} md={5}>
                <div className="imgBox">
                  <img data-src={heroImg} alt="" className="lazyload" />

                  <Button className="name_plate">
                    <Typography variant="h5" color={"text.primary"}>
                      {name}
                    </Typography>
                  </Button>
                </div>

                <Box mt={"2.50rem"}>
                  <pre>
                    <Typography variant="subtitle1" color={"text.tertiary"}>
                      {education}
                    </Typography>
                  </pre>
                </Box>
              </Grid>

              <Grid item lg={7.5} md={7}>
                <pre>
                  <Typography variant="subtitle1" color="text.secondary">
                    {introText}
                  </Typography>
                </pre>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </section>

      {/* quote-banner section */}
      <section className="section">
        <QuoteBanner
          bgImg={quoteBanner}
          quote={
            <>
              “I plan to create a healthier world around us with the help of
              Ayurveda: the life science” <br /> – Dr. Jyoti Shinde
            </>
          }
        />
      </section>

      {/* our-story section */}
      <section className="section">
        <Title title={"Our Story"} variant={"h2"} />

        <Container maxWidth="xl">
          {OurStory_Data.map(({ id, img, text }) => (
            <Grid
              container
              key={id}
              flexDirection={id % 2 === 0 && "row-reverse"}
              justifyContent={"center"}
              alignItems={"center"}
              columnSpacing={8}
              rowSpacing={1.5}
              mb={"2.56rem"}
            >
              <Grid item md={5} textAlign={"start"}>
                <div className="imgBox">
                  <img data-src={img} alt="" className="lazyload" />
                </div>
              </Grid>

              <Grid item md={7}>
                <pre>
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    color={"text.quaternary"}
                  >
                    {text}
                  </Typography>
                </pre>
              </Grid>
            </Grid>
          ))}
        </Container>
      </section>

      {/* our-team section */}
      <section
        className="section"
        style={{
          backgroundColor: "rgba(172, 189, 51, 0.2)",
          paddingBlock: "50px",
        }}
      >
        <Container maxWidth="xxl">
          <Title title={"Our Team"} variant={"h2"} />

          <Container maxWidth="xl">
            <CardSlider cardData={Team_Details} slides={4} />
          </Container>
        </Container>
      </section>

      {/* accordion section */}
      <section className="section">
        <Title title={"3 P’s of SV- Aarogyasutram"} />

        <Container maxWidth="xl">
          <Accordion
            accordionData={Aarogyasutram_3Ps_Data}
            bgColor={"rgba(172, 181, 52, 0.2)"}
          />
        </Container>
      </section>
    </>
  );
};

export default About;
