// validation.js
export const isValidDate = (date) => {
  const selectedDate = new Date(date);
  const today = new Date();
  return selectedDate >= today;
};

export const isValidGuests = (guests) => {
  const guestCount = parseInt(guests, 10);
  return guestCount >= 1 && guestCount <= 10;
};

export const isFormFilled = (date, time, guests, occasion) => {
  return date && time && guests && occasion;
};
