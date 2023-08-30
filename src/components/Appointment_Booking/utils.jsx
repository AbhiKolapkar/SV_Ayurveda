import { listOfDays, listOfMonths } from "./data";

export const addMonthsToDate = (date, numOfMonth) => {
  return new Date(date.setMonth(date.getMonth() + numOfMonth));
};

export const normaliseDateToReadableString = (d) => {
  const month = d.getMonth();
  const date = d.getDate();
  const day = d.getDay();
  const year = d.getFullYear();

  const result = `${listOfDays[day]} ${date} ${listOfMonths[month]} ${year}`;

  return result;
};

// Utility function to convert local time to IST
export const convertToIST = (localDate) => {
  const offsetIST = 5.5; // IST is UTC+5:30

  const utcTime = localDate.getTime() + localDate.getTimezoneOffset() * 60000;
  const istTime = new Date(utcTime + 3600000 * offsetIST);

  return istTime;
};

// Utility function to format time from a Date object
export const formatTime = (date) => {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

// Utility function to extract hour and minute from a time string
export const extractHourAndMinute = (timeString) => {
  const [hours, minutes] = timeString
    .split(":")
    .map((part) => parseInt(part, 10));
  return { hours, minutes };
};

/**
 * Date doesn't matter
 * @param  {string} time
 * @returns {number} return milliseconds of the date created with time parameter
 */
export const timeToMilliseconds = (time) => {
  const [hours, mins] = time.split(":");
  const updateHours = new Date().setHours(hours);
  const updateMinsAndHours = new Date(updateHours).setMinutes(mins);
  return updateMinsAndHours;
};

// Utility function to convert 12-hour AM-PM format to 24-hour format
export const get24HrsFrmAMPM = (time) => {
  const [timePart, period] = time.split(" ");
  const [hours, minutes] = timePart.split(":");
  const parsedHours = parseInt(hours, 10);

  if (period === "PM" && parsedHours !== 12) {
    return `${parsedHours + 12}:${minutes}`;
  } else if (period === "AM" && parsedHours === 12) {
    return `00:${minutes}`;
  }

  return `${hours}:${minutes}`;
};

/* ***** create time intervals ***** */
export const createTimeIntervals = (startTime, endTime, interval) => {
  const timeSlots = [];
  if (startTime >= endTime)
    throw new Error("Start time cannot be greater than closing time");

  for (
    let i = startTime;
    i < endTime;
    i = new Date(i + interval * 60000).getTime()
  ) {
    timeSlots.push(formatTime(new Date(i)));
  }
  return timeSlots;
};

// Get all times available base on schedule
export const getTotalTimeSlots = (schedule, date, interval) => {
  let daySchedule = null;
  for (let k = 0; k < schedule.length; k += 1) {
    if (schedule[k].day === listOfDays[date.getDay()]) {
      daySchedule = schedule[k];
    }
  }

  if (daySchedule) {
    const start = extractHourAndMinute(get24HrsFrmAMPM(daySchedule.startTime))
    const end = extractHourAndMinute(get24HrsFrmAMPM(daySchedule.endTime))

    let startHour = new Date(date).setHours(start.hours, start.minutes, 0, 0)
    let endHour = new Date(date).setHours(end.hours, end.minutes, 0, 0)

    const totalTimeSlots = createTimeIntervals(startHour, endHour, interval);

    return totalTimeSlots;
  }
};

