import { useContext } from "react"
import { ThemeContext } from "../Context"
import { createGlobalStyle } from "styled-components"
import { useTheme } from "../Hooks"

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
        
        background-color: ${({ isDarkMode }) =>
        isDarkMode ? '#2F2E41' : 'white'};
             
    }
`

function GlobalStyle(){
    //const {theme} = useContext(ThemeContext)
    const{theme} = useTheme()
    return <StyledGlobalStyle isDarkMode={theme === 'dark'}/>
}

export default GlobalStyle

// background-color: ${({isDarkMode}) => (isDarkMode ? 'black' : 'white')}; margin: 0;
