import React from "react";
import { StyledKeypad } from "./styled/KeyPad.Styled";

const KeyPad = (props) => {
    return (
        <StyledKeypad>
            <button onClick={props.onClick} className='key num'>
                7
            </button>
            <button onClick={props.onClick} className='key num'>
                8
            </button>
            <button onClick={props.onClick} className='key num'>
                9
            </button>
            <button onClick={props.onClick} className='key key-2'>
                DEL
            </button>
            <button onClick={props.onClick} className='key num'>
                4
            </button>
            <button onClick={props.onClick} className='key num'>
                5
            </button>
            <button onClick={props.onClick} className='key num'>
                6
            </button>
            <button onClick={props.onClick} className='key'>
                +
            </button>
            <button onClick={props.onClick} className='key num'>
                1
            </button>
            <button onClick={props.onClick} className='key num'>
                2
            </button>
            <button onClick={props.onClick} className='key num'>
                3
            </button>
            <button onClick={props.onClick} className='key'>
                -
            </button>
            <button onClick={props.onClick} className='key'>
                .
            </button>
            <button onClick={props.onClick} className='key num'>
                0
            </button>
            <button onClick={props.onClick} className='key'>
                /
            </button>
            <button onClick={props.onClick} className='key'>
                x
            </button>
            <button onClick={props.onClick} className='key btm-key key-2'>
                RESET
            </button>
            <button onClick={props.onClick} className='key btm-key key-3'>
                =
            </button>
        </StyledKeypad>
    );
};

export default KeyPad;
