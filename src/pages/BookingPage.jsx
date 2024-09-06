import React, { useEffect, useReducer, useState } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api/fetchAPI.js";
import { redirect } from "react-router-dom";

function bookingReducer(availableTimes, action) {
  switch (action.type) {
    case "INITIAL_TIMES":
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    case "SET_FETCH":
      return action.data;
    default:
      throw new Error("Can't Load ExternalAPI");
  }
}

function submitForm(formData) {
  try {
    if (submitAPI(formData)) {
      redirect("confirmedbooking");
    } else {
      throw new Error("Error submitting your reservation");
    }
  } catch (error) {
    console.error(error.message);
  }
}

const BookingPage = () => {
  const [availableTimes, timeDispatch] = useReducer(bookingReducer, []);
  const [date, setDate] = useState("");

  useEffect(() => {
    if (date) {
      try {
        const fetchedTimes = fetchAPI(new Date(date));
        timeDispatch({ type: "SET_FETCH", data: fetchedTimes });
      } catch (error) {
        console.error("Failed to fetch available times:", error);
      }
    } else {
      timeDispatch({ type: "INITIAL_TIMES" });
    }
  }, [date]);

  function updateTimes(selectedDate) {
    setDate(selectedDate);
  }

  return (
    <div className="container">
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;
