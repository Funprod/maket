import styled from "styled-components";
import { theme } from "../styles/Theme.styled";

export const Text = styled.div`
    max-width: 70px;
    max-height: 19px;
    margin-top: 10px;
    margin-left: 20px;
`
export const Title = styled.h1`
    font-weight: 700;
    font-size: 16px;
    line-height: 19.36px;
`

export const Paragraph = styled.p`
    margin-top: 15px;
    width: 260px;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: ${theme.colors.text};
`