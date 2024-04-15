import { Link } from "react-router-dom";
import styled, {keyframes} from 'styled-components' //keyframes is used for the loading icon
import color from "./colors";
import colors from "./colors";

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

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`

export const Loader = styled.div`
    padding: 10px;
    border: 6px solid ${colors.primary};
    border-bottom-color: transparent;
    border-radius: 22px;
    animation: ${rotate} 1s infinite linear;
    height: 0;
    width: 0;
`