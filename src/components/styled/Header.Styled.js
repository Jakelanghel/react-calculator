import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;

    h1 {
        color: ${({ theme }) => theme.colors.txt2};
    }

    .container-theme-toggle {
        display: flex;
        align-items: center;
    }

    ul {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.txt2};
        width: 75px;
        display: flex;
        justify-content: space-around;
        list-style: none;
        padding: 0;
        margin: 0;
        margin-left: 3px;
    }

    li {
        font-size: 0.65rem;
    }

    p {
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.txt2};
        margin-right: 1rem;
        padding-top: 10px;
    }

    input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        margin-right: 15px;
        width: 75px;
        height: 20px;
        background-color: ${({ theme }) => theme.colors.keyPadBkg};
        border-radius: 15px;
        padding: 5px;
    }

    /* Chrome */

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin-right: 15px;
        width: 75px;
        height: 20px;
        background-color: ${({ theme }) => theme.colors.keyPadBkg};
        border-radius: 15px;
        padding: 5px;
    }

    /* Moz */

    input[type="range"]::-moz-range-thumb {
        width: 14px;
        height: 14px;
        background-color: ${({ theme }) => theme.colors.keyBkg3};
        cursor: pointer;
        border-radius: 50%;
        border: none;
    }
`;
