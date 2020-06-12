import React, {useRef} from "react";
import Input from "@material-ui/core/Input";

const SearchForm = props => {
    const inputRef = useRef(null);

    return (
        <Input
            autoFocus={true}
            ref={inputRef}
            placeholder="Game Title"
        />
    );
};

export default SearchForm;
