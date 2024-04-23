import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../Tools/Style/colors'
import { StyledLink } from '../../Tools/Style/Atoms'
import darkLogo from '../../assets/dark-logo.png'
import { useTheme } from '../../Tools/Hooks'
import lightLogo from '../../assets/light-logo.png'


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
    const {theme} = useTheme()

    return(
        <NavContainer>
            <Link to="/"><HomeLogo src={theme === 'light' ? darkLogo : lightLogo}/></Link>
            <div>
            {/*<Link to="/">Home</Link>*/}
            <StyledLink $theme={theme} to="/">Home</StyledLink>
            {/*<Link to="/Freelance">Profiles</Link>*/}
            <StyledLink $theme={theme} to="/Freelance">Profiles</StyledLink>
            {/*<Link to="/survey/1">Questionnaire</Link>*/}
            {/** Only Questionnaire has the styles from the props */} 
            <StyledLink to="/survey/1" $isFullLink>Start the test</StyledLink> {/** Initialization when it's the first question, will change depends on the next or previous link */}
            </div>
        </NavContainer>
    )
}

export default Header