import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Error } from "@mui/icons-material";
import { getAMPMFrm24Hrs } from "./utils";
import axios from "axios";
import { APPOINTMENT_API_URL } from "../../data/apiData";
import { listOfMonths } from "./data";

const BookingForm = ({ selectedTime, handleSuccess, cardTitle }) => {
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const date = `${selectedTime.getDate()}-${listOfMonths[
    selectedTime.getMonth()
  ]}-${selectedTime.getFullYear()}`;
  const timeString = getAMPMFrm24Hrs(
    `${
      selectedTime.getHours() < 10
        ? 0`${selectedTime.getHours()}`
        : selectedTime.getHours()
    }:${selectedTime.getMinutes() === 0 ? "00" : selectedTime.getMinutes()}`
  );

  useEffect(() => {
    setValue("purpose", cardTitle ? cardTitle : "General");
  }, []);

  const onSubmit = async (data) => {
    handleSuccess();

    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }
    formData.append("date", date);
    formData.append("time", timeString);

    const response = await axios.post(APPOINTMENT_API_URL, formData);
    console.log(response.data);

    // try {
    //   handleSuccess();
    //   const formData = getValues();

    //   const makeAppointment = {
    //     ...formData,
    //     date: date,
    //     time: timeString,
    //   };
    //   updateAppointment(makeAppointment);

    //   const response = await axios.post(
    //     "https://28cc-14-194-155-90.ngrok-free.app/book-appointment",
    //     makeAppointment
    //   );
    //   console.log(response.data);
    // } catch (error) {
    //   console.log("Error: ", error);
    // }

    reset();
  };

  return (
    <>
      <div className="booking-submission">
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          noValidate
          className="bs-body"
        >
          <div className="input-fields">
            <div id="purpose">
              <h3>Purpose of Meeting</h3>
              <input
                id="purpose"
                type="text"
                {...register("purpose")}
                disabled
              />
            </div>

            <div className="radio_btns">
              <h3>What would you prefer?</h3>
              <div className="radio-label">
                <label htmlFor="online">
                  <input
                    type="radio"
                    id="online"
                    value="Online"
                    {...register("mode", {
                      required: "Please select an option",
                    })}
                  />
                  Online/Virtual
                </label>
                <label htmlFor="offline">
                  <input
                    type="radio"
                    id="offline"
                    value="Offline"
                    {...register("mode", {
                      required: "Please select an option",
                    })}
                  />
                  In Person
                </label>
              </div>
              {errors.meet_mode && (
                <p className="errorMsg">
                  {" "}
                  <Error /> {errors.meet_mode.message}
                </p>
              )}
            </div>

            <div id="full-name">
              <h3>Full Name</h3>
              <input
                id="full-name"
                type="text"
                placeholder="e.g. John Smith"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="errorMsg">
                  {" "}
                  <Error /> {errors.name.message}
                </p>
              )}
            </div>

            <div id="email">
              <h3>Email</h3>
              <input
                id="email"
                type="text"
                placeholder="e.g. johnsmith@email.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="errorMsg">
                  {" "}
                  <Error /> {errors.email.message}
                </p>
              )}
            </div>

            <div id="phone">
              <h3>Phone Number</h3>
              <input
                id="phone"
                type="text"
                placeholder="e.g. 9874102365"
                name="phone"
                {...register("phone", {
                  required: "Phone number is required",
                })}
              />
              {errors.phone && (
                <p className="errorMsg">
                  {" "}
                  <Error /> {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <input type="submit" value="Book an Appointment" />
        </form>
      </div>
    </>
  );
};

export default BookingForm;
