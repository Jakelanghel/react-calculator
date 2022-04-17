import styled from "styled-components";

export const StyledInput = styled.div`
    input {
        width: 100%;
        text-align: right;
        font-size: 1.75rem;
        font-weight: 700;
        padding: 1.5rem;
        padding-left: 0;
        border: none;
        border-radius: 8px;
        color: ${({ theme }) => theme.colors.txt2};
        background-color: ${({ theme }) => theme.colors.screenBkg};
    }
`;
