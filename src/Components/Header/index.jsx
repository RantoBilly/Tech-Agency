import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../Tools/Style/colors'
import { StyledLink } from '../../Tools/Style/Atoms'
import darkLogo from '../../assets/dark-logo.png'


const HomeLogo = styled.img`
    height: 70px;
`

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-itmes: center;
`


function Header(){
    return(
        <NavContainer>
            <Link to="/"><HomeLogo src={darkLogo}/></Link>
            <div>
            {/*<Link to="/">Home</Link>*/}
            <StyledLink to="/">Home</StyledLink>
            {/*<Link to="/Freelance">Profiles</Link>*/}
            <StyledLink to="/Freelance">Profiles</StyledLink>
            {/*<Link to="/survey/1">Questionnaire</Link>*/}
            {/** Only Questionnaire has the styles from the props */} 
            <StyledLink to="/survey/1" $isFullLink>Start the test</StyledLink> {/** Initialization when it's the first question, will change depends on the next or previous link */}
            </div>
        </NavContainer>
    )
}

export default Header