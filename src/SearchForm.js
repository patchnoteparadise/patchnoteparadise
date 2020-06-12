import 'date-fns';
import React, {useRef, useState} from "react";
import TextField from "@material-ui/core/TextField";
import {DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    textField: {
        color: "white"
    }
}));

const SearchForm = props => {
    const classes = useStyles();
    const inputRef = useRef(null);
    const dateRef = useRef(null);

    const handleDateChange = (data) => {
        console.log(data);
    };

    return (
        <div className="w-full">
            <div className="w-full max-w-4xl mx-auto flex justify-between">
                {/*TODO look into making a theme to make these all light colored on a dark background*/}
                <TextField
                    className={`w-3/5`}
                    autoFocus={true}
                    ref={inputRef}
                    label="Game Title"
                    variant="outlined"
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        views={["year", "month"]}
                        label="Last Played"
                        maxDate={new Date()}
                        //value={selectedDate}
                        onChange={handleDateChange}
                        inputVariant="outlined"
                    />
                </MuiPickersUtilsProvider>
                <Button
                    variant="contained"
                >
                    Search
                </Button>
            </div>
        </div>
    );
};

export default SearchForm;
