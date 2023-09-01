import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { NavigationArrow, SVG_Calendar } from "../../common/SVG_Icons";
import {
  addMonthsToDate,
  extractHourAndMinute,
  get24HrsFrmAMPM,
  getAMPMFrm24Hrs,
  getTotalTimeSlots,
  istTime,
  normaliseDateToReadableString,
} from "./utils";
import { BOOKED_APPOINTMENT_API_URL } from "../../data/apiData";
import axios from "axios";

const BookingTime = ({
  selectedProfile,
  updateSelectedTime,
  selectedTime,
  handleShow,
}) => {
  const BOOKING_DURATION_MONTHS = 2;
  const START_DATE = new Date();
  const END_DATE = addMonthsToDate(new Date(), BOOKING_DURATION_MONTHS);
  // console.log(istTime(START_DATE));

  const [timeDisplay, setTimeDisplay] = useState();
  const [calendarDate, setCalendarDate] = useState(START_DATE);
  const [calendarDisplay, setCalendarDisplay] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);

  useEffect(() => {
    axios
      .get(BOOKED_APPOINTMENT_API_URL)
      .then((res) => setBookedSlots(res.data.appointments))
      .catch((error) => console.log(error));
  }, [BOOKED_APPOINTMENT_API_URL]);

  // bookedSlots.map(item => {
  //   console.log(istTime(new Date(`${item.date} ${item.time}`)));
  // })

  const onCalendarDisplay = () => {
    setCalendarDisplay(!calendarDisplay);
  };

  const getAvailableTimeSlots = (selectedDate) => {
    let currentTime = new Date().getTime();
    let totalWorkingSlots = getTotalTimeSlots(
      selectedProfile.workSchedule,
      selectedDate,
      30
    );

    let totalRestingSlots = getTotalTimeSlots(
      selectedProfile.restSchedule,
      selectedDate,
      30
    );

    totalWorkingSlots = totalWorkingSlots.filter(
      (val) => !totalRestingSlots.includes(val)
    );

    let availableWorkingSlots = totalWorkingSlots.filter((time) => {
      const getTime = extractHourAndMinute(get24HrsFrmAMPM(time));
      const bigTime = new Date(selectedDate).setHours(
        getTime.hours,
        getTime.minutes,
      );
      return bigTime >= currentTime;
    });
    return availableWorkingSlots;
  };

  const onCalenderClick = (val, _eve) => {
    setCalendarDate(val);

    setTimeout(() => onCalendarDisplay(), 600);

    setTimeDisplay(getAvailableTimeSlots(val));
  };

  const onTimeSelect = (e) => {
    const { hours, minutes } = extractHourAndMinute(
      get24HrsFrmAMPM(e.target.ariaLabel)
    );

    const tempDate = new Date(
      calendarDate.getFullYear(),
      calendarDate.getMonth(),
      calendarDate.getDate(),
      hours,
      minutes
    );

    setTimeout(() => updateSelectedTime(tempDate), 200);
    handleShow();
  };

  useEffect(() => {
    updateSelectedTime("");
    setTimeDisplay(getAvailableTimeSlots(START_DATE));
    setCalendarDate(START_DATE);
    setCalendarDisplay(false);
  }, [selectedProfile]);

  const renderTimeResponseDisplay = () => {
    if (selectedTime) {
      const timeString = `
      ${normaliseDateToReadableString(selectedTime)} at 
      ${getAMPMFrm24Hrs(
        `${
          selectedTime.getHours() < 10
            ? 0`${selectedTime.getHours()}`
            : selectedTime.getHours()
        }:${selectedTime.getMinutes() === 0 ? "00" : selectedTime.getMinutes()}`
      )}`;

      return (
        <div className="selection-response response-success">
          <h5>Appointment with {selectedProfile.name}</h5>
          <h6>{timeString}</h6>
          <h6>Consultation (30min)</h6>
        </div>
      );
    } else {
      return (
        <div className="selection-response response-warning">
          <h5>Please select a time!</h5>
        </div>
      );
    }
  };

  return (
    <>
      <div className="booking-selection">
        <div className="bs-header">
          <h5>
            {calendarDate ? normaliseDateToReadableString(calendarDate) : ""}
          </h5>

          <button
            type="button"
            className="calendar-btn"
            onClick={onCalendarDisplay}
          >
            <SVG_Calendar />
          </button>
        </div>

        <div className="bs-body">
          {calendarDisplay && (
            <Calendar
              minDate={START_DATE}
              maxDate={END_DATE}
              value={calendarDate}
              onChange={(val, eve) => onCalenderClick(val, eve)}
              showNeighboringMonth={false}
              minDetail="year"
              className="calender-selector"
              next2Label=""
              prev2Label=""
              nextLabel={<NavigationArrow />}
              prevLabel={<NavigationArrow />}
              tileContent=""
              tileDisabled={({ date }) => !date.getDay("Sunday")}
            />
          )}

          <div className="time-selector">
            {timeDisplay
              ? timeDisplay.map((time, i) => (
                  <button
                    key={i}
                    type="button"
                    className="time-button"
                    aria-label={time}
                    onClick={(e) => onTimeSelect(e)}
                  >
                    {time}
                  </button>
                ))
              : ""}
          </div>

          {renderTimeResponseDisplay()}
        </div>
      </div>
    </>
  );
};

export default BookingTime;
