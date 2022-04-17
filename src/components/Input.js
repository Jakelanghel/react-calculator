import React from "react";
import { StyledInput } from "./styled/Input.Styled";

const Input = (props) => {
    return (
        <StyledInput>
            <input value={props.input} onChange={props.onChange} />
        </StyledInput>
    );
};

export default Input;
