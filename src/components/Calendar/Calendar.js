import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';



const Cal=()=> {
    const [value, onChange] = useState(new Date());

    return (
      <div className="react-calendar">
        <Calendar
            
            onChange={onChange}
            value={value}
            selectRange={true}
            locale='eng' nextLabe="null"
            prevLabel=''
            prev2Label=''
            nextLabel=''
            next2Label=''    
         />
        
      </div>
      
    );
}

export default Cal;
