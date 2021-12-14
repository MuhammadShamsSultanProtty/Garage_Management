import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
const Calender = ({ date, setDate }) => {

    return (

        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                displayStaticWrapperAs="desktop"
                openTo="day"
                value={date}
                onChange={(newValue) => {
                    setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>



        // <LocalizationProvider dateAdapter={AdapterDateFns}>
        //     <StaticDatePicker
        //         orientation="landscape"
        //         openTo="day"
        //         value={value}
        //         // shouldDisableDate={isWeekend} 
        //         onChange={(newValue) => {
        //             setValue(newValue);
        //         }}
        //         renderInput={(params) => <TextField {...params} />}
        //     />
        // </LocalizationProvider>
    );
};

export default Calender;