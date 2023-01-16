import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './CalView.css'
import '../Register-btn/Register-btn.css'


const Appointment=()=>
{
  const [bookedDates, setBookedDates] = useState([new Date('2023-01-01'), new Date('2023-03-01')]);
  const today=new Date();


  
return (
  <div className='mx-5' id='calDiv'>
    <Calendar
    locale="en-US"
    
      
    />
  </div>
);
}

export default Appointment;