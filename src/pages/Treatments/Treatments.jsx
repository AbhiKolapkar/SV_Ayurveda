import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import { BannerImages_Data } from "../../data/images";
import { Title } from "../../components/Title/Title";
import Tabs from "../../components/Tabs/Tabs";
import Fallback from "../../common/Fallback";

const Treatments = () => {
  const { treatmentBanner } = BannerImages_Data;
  const API_URL =
    "https://api.svayurved.com/getTreatments";
  const [treatmentsData, setTreatmentsData] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setTreatmentsData(res.data.treatments))
      .catch((error) => console.error("error fetching data", error));
  }, [API_URL]);

  return (
    <>
      <section className="section">
        <Container maxWidth="xl">
          <div className="imgBox">
            <img data-src={treatmentBanner} alt="" className="lazyload" />
          </div>
        </Container>
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <Title title="SV Treatments" />

          {treatmentsData ? <Tabs data={treatmentsData} /> : <Fallback />}
        </Container>
      </section>
    </>
  );
};

export default Treatments;
