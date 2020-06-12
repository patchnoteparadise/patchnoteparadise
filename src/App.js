import React, {useRef} from 'react';
import './App.css';
import {makeStyles} from "@material-ui/styles";
import SearchForm from "./SearchForm";

const useStyles = makeStyles(theme => ({
    root: {
    }
}));

const App = () => {
    const classes = useStyles();

    return (
        <div className="App">
            <SearchForm/>
        </div>
    );
};

export default App;
