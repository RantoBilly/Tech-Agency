import { Link } from "react-router-dom";
import styled from 'styled-components'
import color from "./colors";

//Stylizing an element form a library
// $ is used only for React components (e.g : Link) and not for HTML elements (cannot work with h1 or p etc ...)

export const StyledLink = styled(Link)`
    padding: 10px 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    text-align: center;

    ${(props) =>
        props.$isFullLink && `
            color: white;
            border-radius: 30px;
            background-color: ${color.primary};
        `
    }
`