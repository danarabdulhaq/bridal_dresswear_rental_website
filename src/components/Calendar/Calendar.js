import  React ,{useState}from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import './Calendar.css';


const Cal=()=> {
    
    const [value, setValue] = useState(dayjs());
    const [highlightedDays] = useState([0]);

    return(
    
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
        orientation="portrait"
        openTo="day"
        value={value}
        onChange={(newValue) => {
            setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        renderDay={(day, _value, DayComponentProps) => {
            const isSelected =
                !DayComponentProps.outsideCurrentMonth &&highlightedDays.indexOf(day.date()) >= 0;
            return (
                <Badge
                key={day.toString()}
                overlap="circular"
                badgeContent={isSelected ? '❗' : undefined}
                >
                <PickersDay {...DayComponentProps} />
                </Badge>
            );
        }}
        

        />
        </LocalizationProvider>
);



}

export default Cal;
