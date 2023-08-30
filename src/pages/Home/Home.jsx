import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import HeroSlider from "../../components/Sliders/Hero_Slider/HeroSlider";

import styles from "./style.module.css";
import { BannerImages_Data, Home_Page_Images } from "../../data/images";
import { Title } from "../../components/Title/Title";
import { Button } from "../../common/BookingBtn";
import { CTA_Banner, QuoteBanner } from "../../components/Banners/Banners";
import {
  Aarogyasutram_3Ps_Data,
  Faqs_Data,
  Review_Data,
} from "../../data/constant";
import ReviewCard from "../../components/Review_Card/ReviewCard";
import CardSlider from "../../components/Sliders/Card_Slider/CardSlider";
import Accordion from "../../components/Accordion/Accordion";
import Card from "../../components/Card/Card";
import Counter from "../../components/Counter/Counter";

const Home = () => {
  const { quoteBanner, counterBanner, ctaBanner } = BannerImages_Data;
  const { founder1, founder2 } = Home_Page_Images;
  return (
    <>
      {/* hero-banner slider */}
      <section className="section">
        <Container maxWidth="xl">
          <HeroSlider />
        </Container>
      </section>

      {/* about SV Ayurved Section */}
      <section className="section">
        <Container
          maxWidth={false}
          sx={{ background: "rgba(172,181,72,0.2)", paddingBlock: "3rem" }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              columnGap={{ md: "7rem" }}
              rowGap={"2rem"}
            >
              <Grid item md={5}>
                <div className="imgBox">
                  <img data-src={founder1} alt="" className="lazyload" />
                </div>
              </Grid>

              <Grid item md={5}>
                <Box mb={-2.5} mt={-1}>
                  <Title
                    title="About SV Ayurved"
                    variant="h1"
                    align={{ xs: "center", md: "start" }}
                  />
                </Box>
                <Typography variant="subtitle1" color="text.secondary">
                  We are SV Ayurved formerly known as “Shree Vishwa Vajra
                  Ayurved”, Founded by Dr. Jyoti Shinde on 11 June 2016 in Pune,
                  MH, India. <br />
                  Followers of “NATH PARAMPARA” which is the legacy of a
                  succession of “PASAYDANAM” started by “SHREE DNYANESHWAR
                  MAULI”.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </section>

      {/* about founder Section */}
      <section className="section">
        <Container maxWidth={false}>
          <Container maxWidth="lg">
            <Title title={"Founder Introduction"} />

            <Grid
              container
              justifyContent="center"
              alignItems="center"
              gap="3rem"
            >
              <Grid item md={5}>
                <div className="imgBox">
                  <img data-src={founder2} alt="" className="lazyload" />

                  <Button className="name_plate">
                    <Typography variant="h5" color={"text.primary"}>
                      Dr. Jyoti Shinde
                    </Typography>
                  </Button>
                </div>
              </Grid>

              <div className={styles.divider}></div>

              <Grid item md={5}>
                <Typography variant="subtitle1" color="text.secondary">
                  Meet the visionary behind SVayurved - Dr. Jyoti Shinde. With a
                  proud Indian heritage deeply rooted in Maharashtrian culture,
                  Dr. Jyoti brings over 10+ years of experience as an Ayurvedic
                  Vaidya who treats a range of medical issues. She embraces the
                  core Ayurvedic principle that every patient is distinct and
                  deserving of individualized care [purusham purusham veekshya].
                  Dr. Jyoti is a well-respected Ayurvedic physician as well as a
                  recognized gynecologist, infertiologist, dermatologist, and
                  cosmetologist. She is driven by her enthusiasm to offer
                  holistic treatments.
                </Typography>
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

      {/* counter section */}
      <section>
        <Counter />
      </section>

      {/* Aarodyasutram cards section */}
      <section className="section">
        <Container
          maxWidth={false}
          disableGutters
          sx={{ background: "rgba(172, 189, 51, 0.20)", pb: "3rem" }}
        >
          <Typography
            variant="h2"
            color="text.primary"
            textAlign="center"
            sx={{ background: "var(--dark-green)", paddingBlock: "1.5rem" }}
          >
            3 P's of Aarogyasutram
          </Typography>

          <Box mt={-1}>
            <Title
              title="-------------------------------------"
              variant="body2"
              visible="hidden"
            />
          </Box>

          <Container maxWidth="lg">
            <div className={styles.cardSection}>
              {Aarogyasutram_3Ps_Data.map(
                ({ id, image, question, shortAns }) => (
                  <Card
                    key={id}
                    image={image}
                    title={question}
                    shortDesc={shortAns}
                  />
                )
              )}
            </div>
          </Container>
        </Container>
      </section>

      {/* Call to Action section */}
      <section className="section">
        <CTA_Banner
          bgImg={ctaBanner}
          text={"Take the First Step towards Optimal Health Now!"}
        />
      </section>

      {/* reviews section */}
      <section className="section">
        <Title title={"What Our Customers Say"} variant={"h2"} />

        <Container maxWidth="xxl">
          <Container maxWidth="xl">
            <CardSlider
              cardData={Review_Data}
              Component={ReviewCard}
              slides={3}
            />
          </Container>
        </Container>
      </section>

      {/* faqs section */}
      <section className="section">
        <Container maxWidth="xl">
          <Title title={"Frequently Asked Questions"} variant={"h1"} />

          <Accordion accordionData={Faqs_Data} bgColor={"#FFFFFF"} />
        </Container>
      </section>
    </>
  );
};

export default Home;
