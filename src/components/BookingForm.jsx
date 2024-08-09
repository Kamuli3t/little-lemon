import React, { useState } from "react";
import Button from "./Button";
import Header from "./Header";

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [date] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (date && time && guests && occasion) {
      console.log(date, time, guests, occasion);
    } else {
      alert("Please fill out all fields.");
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
          value={date}
          onChange={() => updateTimes()}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
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
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="" disabled>
            Select occasion
          </option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <Button type="submit" content="Make a Reservation" />
      </form>
    </>
  );
};

export default BookingForm;
