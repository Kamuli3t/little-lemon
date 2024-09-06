import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm"; // Update the path if needed

describe("BookingForm", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const submitFormMock = jest.fn();
  const updateTimesMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
    window.alert = jest.fn(); // Mock the alert function
  });

  afterEach(() => {
    window.alert.mockRestore(); // Restore the original alert function after each test
  });

  test("renders the form with correct labels and placeholders", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimesMock}
        submitForm={submitFormMock}
      />
    );

    expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("1")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Make a Reservation" })
    ).toBeInTheDocument();
  });

  test("submit button is initially disabled", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimesMock}
        submitForm={submitFormMock}
      />
    );

    const submitButton = screen.getByRole("button", {
      name: "Make a Reservation",
    });
    expect(submitButton).toBeDisabled();
  });

  test("submits the form with valid data", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimesMock}
        submitForm={submitFormMock}
      />
    );

    // Fill out the form with valid data
    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: "2024-09-10" },
    });
    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: "Make a Reservation" }));

    // Check if submitForm is called with the correct data
    expect(submitFormMock).toHaveBeenCalledWith({
      date: "2024-09-10",
      time: "18:00",
      guests: "4",
      occasion: "Birthday",
    });
  });

  test("shows an alert when submitting with a past date", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimesMock}
        submitForm={submitFormMock}
      />
    );

    // Fill out the form with a past date
    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: "2023-09-05" },
    });
    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: "Make a Reservation" }));

    // Check if the alert is shown
    expect(window.alert).toHaveBeenCalledWith(
      "The selected date cannot be in the past."
    );
    expect(submitFormMock).not.toHaveBeenCalled(); // Ensure form wasn't submitted
  });

  test("shows an alert when submitting with invalid number of guests", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimesMock}
        submitForm={submitFormMock}
      />
    );

    // Fill out the form with invalid guest count
    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: "2024-09-10" },
    });
    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "0" },
    }); // or '11' or any non-numeric value
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: "Make a Reservation" }));

    // Check if the alert is shown
    expect(window.alert).toHaveBeenCalledWith(
      "Please enter a valid number of guests (between 1 and 10)."
    );
    expect(submitFormMock).not.toHaveBeenCalled(); // Ensure form wasn't submitted
  });

  test("shows an alert when submitting with missing fields", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimesMock}
        submitForm={submitFormMock}
      />
    );

    // Submit the form without filling any fields
    fireEvent.click(screen.getByRole("button", { name: "Make a Reservation" }));

    // Check if the alert is shown
    expect(window.alert).toHaveBeenCalledWith(
      "Please fill out all fields correctly."
    );
    expect(submitFormMock).not.toHaveBeenCalled(); // Ensure form wasn't submitted
  });

  test("calls updateTimes when the date is changed", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimesMock}
        submitForm={submitFormMock}
      />
    );

    // Change the date
    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: "2024-09-15" },
    });

    // Check if updateTimes is called with the new date
    expect(updateTimesMock).toHaveBeenCalledWith("2024-09-15");
  });

  test("enables the submit button when all fields are validly filled", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimesMock}
        submitForm={submitFormMock}
      />
    );

    // Fill out the form with valid data
    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: "2024-09-10" },
    });
    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });

    // Check if the submit button is enabled
    const submitButton = screen.getByRole("button", {
      name: "Make a Reservation",
    });
    expect(submitButton).toBeEnabled();
  });
});
