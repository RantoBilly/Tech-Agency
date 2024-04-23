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

export const SurveyContext = createContext()

export const  SurveyProvider = ({children}) => {
    //answers is an object composed by boolean values
    const [answers, setAnswers] = useState({})
    const saveAnswers = (newAnswers) => {
        setAnswers({...answers, ...newAnswers}) // {1: true, 2: false, etc ...}
    }

    return(
        <SurveyContext.Provider value={{answers, saveAnswers}}>
            {children}
        </SurveyContext.Provider>
    )
}
