import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme1, theme2, theme3 } from ".//components/styled/Theme";
import { GlobalStyles } from "./components/styled/Global";
import { StyledContainer } from "./components/styled/Container.Styled";
import Header from "./components/Header";
import Input from "./components/Input";
import KeyPad from "./components/KeyPad";

function App() {
    const [calState, setCalState] = useState({
        input: "",
        error: false,
        equation: [],
        theme: theme1,
        themeValue: 1,
    });

    const handleChange = (e) => {
        const usrInput = e.target.value;
        const lastInput = usrInput[usrInput.length - 1];
        validateInput(usrInput, lastInput);
    };

    const validateInput = (usrInput, lastInput) => {
        const numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const operators = ["+", "-", "x", "/", "="];
        if (numArr.includes(lastInput) || lastInput === ".") {
            updateInput(usrInput);
        } else if (operators.includes(lastInput)) {
            updateEquation(usrInput, lastInput);
        } else if (usrInput === "") {
            clearInput();
        }
    };

    const updateInput = (usrInput) => {
        setCalState((prevState) => ({
            ...prevState,
            input: usrInput,
        }));
    };

    const updateEquation = (usrInput, lastInput) => {
        if (usrInput.length === 1) {
            if (usrInput === "-") {
                setCalState((prevState) => ({
                    ...prevState,
                    input: usrInput,
                }));
            }
        } else {
            usrInput = parseFloat(usrInput.slice(0, usrInput.length - 1));
            if (lastInput !== "=") {
                setCalState((prevState) => ({
                    ...prevState,
                    equation: [...prevState.equation, usrInput, lastInput],
                    input: "",
                }));
            } else {
                solveEquation(usrInput);
            }
        }
    };

    const solveEquation = (usrInput) => {
        const equationArr = calState.equation;
        let ans = equationArr[0];
        equationArr.push(usrInput);
        equationArr.forEach((num, i) => {
            switch (num) {
                case "+":
                    ans = ans + equationArr[i + 1];
                    break;
                case "-":
                    ans = ans - equationArr[i + 1];
                    break;
                case "x":
                    ans = ans * equationArr[i + 1];
                    break;
                case "/":
                    ans = ans / equationArr[i + 1];
                    break;
                default:
                    break;
            }
        });
        setCalState({
            input: ans,
            error: false,
            equation: [],
        });
    };

    const clearInput = () => {
        setCalState((prevState) => ({
            ...prevState,
            input: "",
        }));
    };

    const handleClick = (e) => {
        const input = e.target.textContent;
        const actions = ["RESET", "DEL"];
        if (!isNaN(input) || input === ".") {
            setCalState((prevState) => ({
                ...prevState,
                input: `${prevState.input}${input}`,
            }));
        } else if (actions.includes(input)) {
            handleAction(input);
        } else {
            const usrInput = `${calState.input}${input}`;
            updateEquation(usrInput, input);
        }
    };

    const handleAction = (input) => {
        if (input === "DEL") {
            setCalState((prevState) => ({
                ...prevState,
                input: prevState.input.slice(0, prevState.input.length - 1),
            }));
        } else {
            setCalState((prevState) => ({
                ...prevState,
                input: "",
            }));
        }
    };

    const toggleTheme = (e) => {
        const sliderValue = e.target.value;
        console.log(sliderValue);
        if (sliderValue == 1) {
            setCalState((prevState) => ({
                ...prevState,
                theme: theme1,
                themeValue: 1,
            }));
        } else if (sliderValue == 2) {
            setCalState((prevState) => ({
                ...prevState,
                theme: theme2,
                themeValue: 2,
            }));
        } else {
            setCalState((prevState) => ({
                ...prevState,
                theme: theme3,
                themeValue: 3,
            }));
        }
    };

    console.log(calState.themeValue);
    return (
        <>
            <ThemeProvider theme={calState.theme}>
                <GlobalStyles />
                <StyledContainer>
                    <Header
                        handleClick={toggleTheme}
                        theme={calState.themeValue}
                    />
                    <Input input={calState.input} onChange={handleChange} />
                    <KeyPad onClick={(e) => handleClick(e)} />
                </StyledContainer>
            </ThemeProvider>
        </>
    );
}

export default App;
