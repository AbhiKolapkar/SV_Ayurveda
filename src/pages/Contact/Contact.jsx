import React from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Title } from "../../components/Title/Title";
import { Contacts_Data } from "../../data/constant";
import contactLogo_img from "../../assets/images/logo-icon.png";
import { InputField } from "../../components/Custom_Inputs/InputField";
import { Button } from "../../common/BookingBtn";
import {
  SVG_Mail,
  SVG_Message,
  SVG_Phone,
  SVG_Profile,
} from "../../common/SVG_Icons";
import {
  Email_Validation,
  Full_Name_Validation,
  Message_Validation,
  Phone_Number_Validation,
} from "../../components/Custom_Inputs/validation";
import styles from './style.module.css'

const Contact = () => {
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
        formData.append(key, data[key]);
      }

      // Append files to the FormData object
      const response = await axios.post(
        "https://api.svayurved.com/user-contact",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }

    reset()
  };

  return (
    <>
      <section className="section">
        <Title title="Contact Us" />

        <Container maxWidth="xl">
          <div className={styles.location_map}>
            {/* google-maps iframe generator */}
            <iframe
              width="100%"
              height="100%"
              src="https://maps.google.com/maps?width=100%&amp;height=432&amp;hl=en&amp;q=Office%20no.110,%20Pallazo%20building,%20near%20Wisdom%20world%20school,%20Hadapsar,%20Pune-%20411%20028+(SV%20Ayurved)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </Container>
      </section>

      <Container maxWidth="xl" className="section">
        <Grid container rowGap={4}>
          <Grid item md={6} xs={12}>
            <Box
              className={styles.content_box}
              sx={{
                width: { xs: "100%", md: "calc(100% + 2.31rem)" },
                borderRadius: {
                  xs: "1.875rem",
                  md: "1.875rem 0rem 0rem 1.875rem",
                },
              }}
            >
              <Typography
                variant="h3"
                color={"text.secondary"}
                className={styles.header_text}
              >
                Get In Touch
              </Typography>

              <div className={styles.contact_info}>
                {Contacts_Data.map(({ id, bgIcon, text }) => (
                  <div key={id}>
                    <span>{bgIcon}</span>
                    <pre>
                      <Typography
                        fontSize={"1.125rem"}
                        color={"text.secondary"}
                        fontWeight={400}
                      >
                        {text}
                      </Typography>
                    </pre>
                  </div>
                ))}
              </div>

              <div className={styles.logo_box}>
                <img data-src={contactLogo_img} alt="" className="lazyload" />
              </div>
            </Box>
          </Grid>

          <Grid item md={6} xs={12}>
            <Box className={styles.form_box}>
              <Typography
                variant="h3"
                color={"text.secondary"}
                className={styles.header_text}
              >
                Have other Questions?
              </Typography>

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
                  <InputField
                    type="text"
                    label="Message"
                    name="message"
                    register={register}
                    icon={<SVG_Message width={30} height={30} />}
                    errors={errors}
                    {...Message_Validation}
                  />
                </div>

                <Button type="submit" className={styles.submitBtn}>
                  <Typography variant="subtitle1" color={"text.primary"}>
                    Send Message
                  </Typography>
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Contact
