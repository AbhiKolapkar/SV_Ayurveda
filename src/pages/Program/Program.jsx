import React from "react";
import axios from "axios";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Title } from "../../components/Title/Title";
import { InputField } from "../../components/Custom_Inputs/InputField";
import {
  Email_Validation,
  Full_Name_Validation,
  Phone_Number_Validation,
  Text_Validation,
} from "../../components/Custom_Inputs/validation";
import {
  SVG_Education,
  SVG_Location,
  SVG_Mail,
  SVG_Phone,
  SVG_Profile,
} from "../../common/SVG_Icons";
import { Button } from "../../common/BookingBtn";
import { BannerImages_Data } from "../../data/images";
import styles from "./style.module.css";
import { PROGRAMS_API_URL } from "../../data/apiData";

const Program = () => {
  const { programBanner } = BannerImages_Data;
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      // Append form fields to the FormData object
      for (const key in data) {
        formData.append(key, data[key]); // Append files to the FormData object
      }

      const response = await axios.post(PROGRAMS_API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }

    reset();
  };

  return (
    <>
      <section className="section">
        <Container maxWidth="xl">
          <div className="imgBox">
            <img data-src={programBanner} alt="" className="lazyload" />
          </div>
        </Container>
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <Title title={"SV Education Programs"} />
        </Container>

        <Container maxWidth="xl">
          <Grid container>
            <Grid item md={6} xs={12} mb={2}>
              <Box
                className={styles.form_box}
                sx={{
                  width: { xs: "100%", md: "calc(100% + 2rem)" },
                  borderRadius: {
                    xs: "1.875rem",
                    md: "1.875rem 0rem 0rem 1.875rem",
                  },
                }}
              >
                <div>
                  <Typography
                    variant="h3"
                    color={"text.secondary"}
                    className={styles.header_text}
                  >
                    Register for the Program
                  </Typography>
                  <Typography
                    fontSize={"0.75rem"}
                    color={"text.tertiary"}
                    fontWeight={400}
                    lineHeight={"174%"}
                  >
                    Register yourself here to discover the secrets of Ayurveda
                  </Typography>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  autoComplete="off"
                >
                  <div className={styles.input_fields}>
                    <InputField
                      type="text"
                      label="Full Name"
                      name="name"
                      register={register}
                      icon={<SVG_Profile />}
                      errors={errors}
                      {...Full_Name_Validation}
                    />
                    <InputField
                      type="email"
                      label="Email ID"
                      name="email"
                      register={register}
                      icon={<SVG_Mail width={30} height={30} />}
                      errors={errors}
                      {...Email_Validation}
                    />
                    <InputField
                      type="tel"
                      label="Phone Number"
                      name="phone"
                      register={register}
                      icon={<SVG_Phone width={30} height={30} />}
                      errors={errors}
                      {...Phone_Number_Validation}
                    />

                    <div className={styles.grid_wrapper}>
                      <InputField
                        type="text"
                        label="Country"
                        name="country"
                        register={register}
                        icon={<SVG_Location width={24} height={24} />}
                        errors={errors}
                        {...Text_Validation}
                      />

                      <InputField
                        type="text"
                        label="City"
                        name="city"
                        register={register}
                        icon={<SVG_Location width={24} height={24} />}
                        errors={errors}
                        {...Text_Validation}
                      />
                    </div>

                    <InputField
                      type="text"
                      label="Your Education"
                      name="education"
                      register={register}
                      icon={<SVG_Education />}
                      errors={errors}
                      {...Text_Validation}
                    />
                  </div>

                  <Button type="submit" className={styles.btn}>
                    <Typography
                      variant="button"
                      color={"text.secondary"}
                      fontWeight={600}
                    >
                      Submit
                    </Typography>
                  </Button>
                </form>
              </Box>
            </Grid>

            <Grid item md={6} xs={12}>
              <Box className={styles.content_box}>
                <div>
                  <Typography
                    variant="h3"
                    color={"text.secondary"}
                    className={styles.header_text}
                  >
                    Details for the Program
                  </Typography>
                </div>

                <Typography variant="h5" color={"text.quinary"} mb={1}>
                  Student’s program
                </Typography>

                <Box className={styles.detailsBox} pb={"2rem"}>
                  <Typography variant="h6" color="text.secondary" mb={1}>
                    Details of the learning system
                  </Typography>
                  <Grid container justifyContent={"space-between"}>
                    <Grid item lg={6} md={12} sm={6}>
                      <ul>
                        <li>Total duration – 8 months</li>
                        <li>1 month – Observership</li>
                        <li>
                          1.5 months – The billing department and the waiting
                          area for patients
                        </li>
                        <li>1.5 months – Panchakarma department</li>
                      </ul>
                    </Grid>
                    <Grid item lg={6} md={12} sm={6}>
                      <ul>
                        <li>1.5 months – medicine department</li>
                        <li>
                          1.5 months – Patient consultation with a consultant
                        </li>
                        <li>1 month – Assistant doctor role</li>
                      </ul>
                    </Grid>
                  </Grid>
                </Box>

                <Box className={styles.detailsBox} py={"2rem"}>
                  <Typography variant="h6" color="text.secondary" mb={1}>
                    Eligibility criteria
                  </Typography>

                  <ul>
                    <li>BAMS or MD [ayu]</li>
                    <li>Only for Ayurved graduates</li>
                  </ul>
                </Box>

                <Box className={styles.detailsBox} py={"2rem"}>
                  <Typography variant="h6" color="text.secondary" mb={1}>
                    Required documents [2 sets of Xerox]
                  </Typography>

                  <ul>
                    <li>BAMS /MD passing</li>
                    <li>Aadhar card</li>
                  </ul>
                </Box>

                <Box py={"2rem"}>
                  <Typography variant="h6" color="text.secondary" mb={1}>
                    Fees
                  </Typography>

                  <ul>
                    <li>
                      Indian Students: <strong>₹16,000/-INR</strong>{" "}
                    </li>
                    <li>
                      Non-Indian Students: <strong>$608/-USD</strong>{" "}
                    </li>
                  </ul>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Program;
