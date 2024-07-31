import styled from "styled-components";
import { theme } from "../styles/Theme.styled";

export const Card = styled.div`
    min-width: 300px;
    min-height: 350px;
    background-color: ${theme.colors.card};
    border-radius: 15px;
    box-shadow: 0px 4px 20px 5px rgba(10, 0, 10, 15%);
    transition: transform 0.2s;

    button + button {
        margin-left: 12px;
        margin-right: 0;
    }

    &:hover {
        transform: scale(1.1);
    }
`