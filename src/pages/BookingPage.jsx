import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm";

function bookingReducer(state, action) {
  switch (action.type) {
    case "SET_AVAILABLE_TIMES":
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      throw new Error("Unknown action type");
  }
}

const BookingPage = () => {
  const [availableTimes, timeDispatch] = useReducer(bookingReducer, []);

  function updateTimes() {
    timeDispatch({ type: "SET_AVAILABLE_TIMES" });
  }

  return (
    <>
      <div className="container">
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimes}
        />
      </div>
    </>
  );
};

export default BookingPage;
