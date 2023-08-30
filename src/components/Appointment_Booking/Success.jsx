import React, { useEffect, useState } from "react";
import { formatTime, normaliseDateToReadableString } from "./utils";

const Success = ({ selectedProfile, selectedTime, appointment }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(!show), 1500);
  }, []);

  return (
    <>
      <div className="container">
        <div className="container-header">
          <h3>
            {`Your appointment with ${selectedProfile.name} has been booked!`}
          </h3>
        </div>

        <div className="container-body">
          <div className="item">
            <h3>Appointment Time</h3>
            <p>
              {`${normaliseDateToReadableString(selectedTime)} 
                at 
                ${formatTime(selectedTime)}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
