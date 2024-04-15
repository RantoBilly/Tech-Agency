import styled from 'styled-components'
import colors from '../../Tools/Style/colors'
import { useContext } from "react"
import { ThemeContext } from '../../Tools/Context'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:  center;
    padding-top:60px;
`

const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
`

function Footer(){

    const {toggleTheme, theme} = useContext(ThemeContext)
    return(
        <FooterContainer>
            <NightModeButton onClick={() => toggleTheme()}>
                Change Mode : {theme==='light' ? '☀️':'🌙'}
            </NightModeButton>
        </FooterContainer>
    )
}

export default Footer