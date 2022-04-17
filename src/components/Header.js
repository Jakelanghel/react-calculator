import React from "react";
import { StyledHeader } from "./styled/Header.Styled";

const Header = (props) => {
    return (
        <StyledHeader>
            <h1>calc</h1>
            <div className='container-theme-toggle'>
                <p>theme</p>
                <div className='container-input'>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                    <input
                        type='range'
                        min='1'
                        max='3'
                        value={props.theme}
                        className='thumb'
                        onChange={props.handleClick}
                    />
                </div>
            </div>
        </StyledHeader>
    );
};

export default Header;
