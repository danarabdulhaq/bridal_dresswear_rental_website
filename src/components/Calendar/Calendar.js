import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'
import '../Register-btn/Register-btn.css'

const Cal=()=> {
  const [bookedDates, setBookedDates] = useState([new Date('2023-01-01'), new Date('2023-03-01')]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function handleChange(dateRange) {
    setStartDate(dateRange[0]);
    setEndDate(dateRange[1]);
  }

  function handleBooking() {
    const bookedDatesInRange = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
      if (bookedDates.includes(currentDate)) {
        alert('One or more of the selected dates are already booked.');
        return;
      }
      bookedDatesInRange.push(currentDate);
      currentDate = new Date(currentDate.getTime() );
    }
    setBookedDates([...bookedDates, ...bookedDatesInRange]);
  }
  return (
    <div className='mx-5' id='calDiv'>
      <Calendar
      locale="en-US"
        onChange={handleChange}
        selectRange
        value={[startDate, endDate]}
        tileDisabled={date => bookedDates.includes(date)}
      />
      <button id="registerBtn" onClick={handleBooking}>Book dates</button>
    </div>
  );
}
export default Cal;