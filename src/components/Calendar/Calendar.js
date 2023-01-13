import React, {  useRef, useState } from 'react';
import './Calendar.css'


const Cal=()=> {
  const startDate=useRef();
  const endDate=useRef();
  const today=new Date();
  const bookedDates=useState([[new Date('01-13-2023'),new Date('01-15-2023')],[new Date('01-17-2023'),new Date('01-20-2023')]]);
  const [book,setBook]=useState()

  const handelClick=()=>{
    const start = startDate.current.valueAsDate;
    const end = endDate.current.valueAsDate;

    let error = "";

    // Iterate over the bookedDates state array
    bookedDates[0].forEach(range => {
        const bookedStart = range[0];
        const bookedEnd = range[1];

        // Check if the selected start date is within the booked range
        if (start >= bookedStart && start <= bookedEnd) {
            error = "Selected start date is already booked.";
        }
        // Check if the selected end date is within the booked range
        if (end >= bookedStart && end <= bookedEnd) {
            error = "Selected end date is already booked.";
        }
        // Check if the selected range completely overlaps the booked range
        if (start < bookedStart && end > bookedEnd) {
            error = "Selected dates are already booked.";
        }
    });
if(end<start)
  {
    console.log('invalid date')
    setBook(false)
    return
  }
    if (error) {
        // Show the error message
        
        console.error(error);
    } else {
        // Proceed with booking the dates
        setBook(true)
        console.log("Dates booked successfully!");
        bookedDates.push([startDate,endDate])

    }


  }

  
  return (
    <>
    <label>from</label>
    <input type="date" min={today.toISOString().slice(0, 10)}ref={startDate}  />
    <label>to</label>
    <input type='date' min={today.toISOString().slice(0, 10)}ref={endDate}/>
    <button onClick={handelClick}id="registerBtn">Book date</button>
    {book?(
      <div className="alert  alert-dark mx-5 my-3" role="alert">
      Dates booked successfully
    </div>
    ):(<div className="alert alert-danger mx-5 my-3" role="alert">
    Selected dates are already booked.  </div>)}
    </>
  );
}
export default Cal;