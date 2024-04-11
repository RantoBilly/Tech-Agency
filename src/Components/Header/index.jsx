import { Link } from 'react-router-dom'
import styled from 'styled-components'

//Stylizing an element form a library
// $ is used only for React components (e.g : Link) and not for HTML elements (cannot work with h1 or p etc ...)
const StyledLink = styled(Link)` 
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;

    ${(props) => 
        props.$isFullLink && `
            color:white;
            border-radius: 30px;
            background-color: #5843E4;
        `
    }
`

function Header(){
    return(
        <nav>
            {/*<Link to="/">Home</Link>*/}
            <StyledLink to="/">Home</StyledLink>

            {/*<Link to="/survey/1">Questionnaire</Link>*/}
            {/** Only Questionnaire has the styles from the props */} 
            <StyledLink to="/survey/1" $isFullLink>Questionnaire</StyledLink> {/** Initialization when it's the first question, will change depends on the next or previous link */}

            {/*<Link to="/Freelance">Profiles</Link>*/}
            <StyledLink to="/Freelance">Profiles</StyledLink>
        </nav>
    )
}

export default Header