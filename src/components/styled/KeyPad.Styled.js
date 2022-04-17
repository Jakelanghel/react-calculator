import styled from "styled-components";

export const StyledKeypad = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1.25rem;
    margin-top: 1rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.keyPadBkg};

    .key {
        font-size: 1rem;
        font-weight: 700;
        width: 22%;
        padding: 0.5rem 0;
        margin-bottom: 10px;
        border-radius: 5px;
        border: none;
        background-color: ${({ theme }) => theme.colors.keyBkg1};
        box-shadow: inset 0px -2px ${({ theme }) => theme.colors.keyShd1};
    }

    .num {
        font-size: 1.5rem;
        font-weight: 700;
    }

    .btm-key {
        width: 48%;
        padding: 1rem 0;
        margin-bottom: 0;
    }

    .key-2 {
        color: ${({ theme }) => theme.colors.txt2};
        background-color: ${({ theme }) => theme.colors.keyBkg2};
        box-shadow: inset 0px -2px ${({ theme }) => theme.colors.keyShd2};
    }

    .key-3 {
        padding: 0;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.txt2};
        background-color: ${({ theme }) => theme.colors.keyBkg3};
        box-shadow: inset 0px -2px ${({ theme }) => theme.colors.keyShd3};
    }
`;
