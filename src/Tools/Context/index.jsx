import { createContext, useState } from "react"

// initiate the Context
export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark': 'light')
    }


return(
    <ThemeContext.Provider value={{theme, toggleTheme}}> 
        {children}
    </ThemeContext.Provider>
)
}
