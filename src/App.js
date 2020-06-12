import React, {useRef} from 'react';
//import './App.css';
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
            <div className={`${classes.root} max-w-6xl mx-auto mt-8`}>
                <SearchForm/>
            </div>
        </div>
    );
};

export default App;
