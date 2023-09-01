import React, { useState } from "react";
import { listOfDoctors } from "./data";
import Item from "./Item";
import BookingTime from "./BookingTime";
import BookingForm from "./BookingForm";
import Success from "./Success";
import "./style.css";

const Container = ({ cardTitle }) => {
  const [appointment, setAppointment] = useState();
  const [doctorProfile, setDoctorProfile] = useState(listOfDoctors[0]);
  const [selectedTime, setSelectedTime] = useState("");
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  const updateSelectedTime = (dateTime) => {
    setSelectedTime(dateTime);
  };

  const handleShow = () => {
    setTimeout(() => setShow(!show), 1000);
  };

  const handleSuccess = () => {
    setTimeout(() => setSuccess(!success), 500);
  };

  const updateAppointment = (val) => {
    setAppointment(val);
  };

  // console.log(appointment);

  return (
    <>
      {success ? (
        <Success
          selectedProfile={doctorProfile}
          selectedTime={selectedTime}
          appointment={appointment}
        />
      ) : (
        <div className="container">
          <div className="container-header">
            <h3 className="title">Book your appointment online</h3>
            <h4 className="subtitle">Fill in the following information</h4>
          </div>

          <div className="container-body">
            {!show ? (
              <Item
                number={1}
                title="Pick an appointment time"
                body={
                  <BookingTime
                    selectedProfile={doctorProfile}
                    updateSelectedTime={updateSelectedTime}
                    selectedTime={selectedTime}
                    handleShow={handleShow}
                  />
                }
              />
            ) : (
              <Item
                number={2}
                title="Confirm your appointment"
                body={
                  <BookingForm
                    selectedTime={selectedTime}
                    handleSuccess={handleSuccess}
                    updateAppointment={updateAppointment}
                    cardTitle={cardTitle}
                  />
                }
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Container;
