import React, { useEffect, useReducer } from "react";
import Button from "./Button";
import Header from "./Header";

// Initial state for the form
const initialState = {
  date: "",
  time: "",
  guests: "",
  occasion: "",
  isFilled: false,
  isValidDate: true,
  isValidGuests: true,
};

// Reducer function to handle state changes
const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "VALIDATE_FORM":
      return { ...state, isFilled: action.isFilled };
    case "VALIDATE_DATE":
      return { ...state, isValidDate: action.isValidDate };
    case "VALIDATE_GUESTS":
      return { ...state, isValidGuests: action.isValidGuests };
    default:
      return state;
  }
};
const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  // Effect to check if all required fields are filled
  useEffect(() => {
    const isFilled = state.date && state.time && state.guests && state.occasion;
    dispatch({ type: "VALIDATE_FORM", isFilled });
  }, [state.date, state.time, state.guests, state.occasion]);

  const submitHandler = (event) => {
    event.preventDefault();

    const selectedDate = new Date(state.date);
    const today = new Date();

    // Date validation
    const isValidDate = selectedDate >= today;
    dispatch({ type: "VALIDATE_DATE", isValidDate });
    if (!isValidDate) {
      alert("The selected date cannot be in the past.");
      return;
    }

    // Guests validation
    const guests = parseInt(state.guests, 10);
    const isValidGuests = guests >= 1 && guests <= 10;
    dispatch({ type: "VALIDATE_GUESTS", isValidGuests });
    if (!isValidGuests) {
      alert("Please enter a valid number of guests (between 1 and 10).");
      return;
    }

    if (state.isFilled && isValidDate && isValidGuests) {
      submitForm({
        date: state.date,
        time: state.time,
        guests: state.guests,
        occasion: state.occasion,
      });
    } else {
      alert("Please fill out all fields correctly.");
    }
  };

  const handleFieldChange = (field) => (event) => {
    dispatch({ type: "SET_FIELD", field, value: event.target.value });
    if (field === "date") {
      updateTimes(event.target.value);
    }
  };

  return (
    <>
      <Header heading="h3" content="Table Reservation" className="text-black" />
      <form
        style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
        onSubmit={submitHandler}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={state.date}
          onChange={handleFieldChange("date")}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={state.time}
          onChange={handleFieldChange("time")}
        >
          <option value="" disabled>
            Select time
          </option>
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={state.guests}
          onChange={handleFieldChange("guests")}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={state.occasion}
          onChange={handleFieldChange("occasion")}
        >
          <option value="" disabled>
            Select occasion
          </option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <Button
          type="submit"
          content="Make a Reservation"
          isFilled={state.isFilled}
        />
      </form>
    </>
  );
};

export default BookingForm;
