import React, { useState } from "react";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import { styled } from "styled-components";
import Container from "../components/Appointment_Booking/Container";

export const Button = styled.button`
  padding: 14px 28px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  gap: 16px;
  border: none;
`;

const btnStyle = {
  boxShadow: "1px 4px 10px 0 rgba(0, 0, 0, 0.3)",
  background: "linear-gradient(348deg, #869633 36%, #ACBD33 100%)",
};

const modalBoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 400 },
  bgcolor: "#FFFFFD",
  borderRadius: "1rem",
};

export const BookingBtn = ({isOnCard, title}) => {
  const [cardTitle, setCardTitle] = useState('')
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open)
    if(isOnCard) {
      setCardTitle(title)
    }
  };
  const handleClose = () => setOpen(false);
  
  return (
    <>
      <Button style={btnStyle} onClick={handleOpen}>
        <Typography variant="button" color="text.primary">
          Book an Appointment
        </Typography>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={modalBoxStyle}>
            <Container cardTitle={cardTitle} />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
