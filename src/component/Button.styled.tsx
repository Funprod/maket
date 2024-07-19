import styled from "styled-components";
import { theme } from "../styles/Theme.styled";

type StyledBtnPropsType = {
    btnType: 'primary' | 'outlined'
}

export const MainBtn = styled.button<StyledBtnPropsType>`
    margin-top: 75px;
    margin-left: 20px;
    width: 86px;
    height: 30px;
    border: 2px solid ${theme.colors.btn};
    border-radius: 5px;
    color:#4E71FE;
    background-color: transparent;

    &:hover {
    border-color: transparent;
    color: #FFFFFF;
    background-color: ${theme.colors.btn};
}
`