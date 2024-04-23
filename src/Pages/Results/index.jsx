import { useContext } from 'react'
import { SurveyContext } from '../../Tools/Context'
import { useFetch, useTheme } from '../../Tools/Hooks'
//import { ThemeContext} from '../../Tools/Context'
import styled from 'styled-components'
import colors from '../../Tools/Style/colors'
import { StyledLink, Loader } from '../../Tools/Style/Atoms'


const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 90px;
    padding: 30px;
    background-color: ${({theme}) =>
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark
    };
`

const ResultsTitle = styled.h2`
    color: ${({theme}) => (theme === 'light' ? '#000000' : '#ffffff')};
    font-weight: bold;
    font-size: 28px;
    max-width: 60%;
    text-align: center;
    & > span {
        padding-left: 10px;
    }
`
const DescriptionWrapper = styled.div`
    padding: 60px;
`

const JobTitle = styled.span`
    color: ${({theme}) => theme === 'light' ? colors.primary : colors.backgroundLight};
    text-transform: capitalize;
`

const JobDescription = styled.div`
    font-size: 18px;
    & > p {
        color: ${({theme}) => (theme === 'light' ? colors.secondary : '#ffffff')};
        margin-bloack-start: 5px;
    }
    & > span {
        font-size: 20px;
    }
`
const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`

function formatQueryParams(answers){
     const answerNumbers = Object.keys(answers) // get the keys of the answers

     return answerNumbers.reduce((previousParams, answerNumber, index) => {
        const isFirstAnswer = index === 0
        const separator = isFirstAnswer ? '' : '&'
        return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`

     }, '' /**return a string */)
}


function Result(){
    
    const { theme } = useTheme()
    const {answers} = useContext(SurveyContext)
    const queryParams = formatQueryParams(answers)
    
    const {data, isLoading, error} = useFetch(
        //the api get all the user's results as a string format following the URL (e.g : 'a1=1&a2=0 etc...')
        `http://localhost:8000/results?${queryParams}`
    )

    if (error) {return <span>An error occured</span>}
    const resultsData = data?.resultsData // this syntaxe is used for arrays as resultsData is an array (from the URL of the API) 

    return isLoading ?(
        <LoaderWrapper>
            <Loader/>
        </LoaderWrapper>
    ) : (
        <ResultsContainer theme={theme}>
            <ResultsTitle theme={theme}>
                Skills that you need :
                {resultsData && resultsData.map((result,index) => (
                    <JobTitle
                        key= {`result-title-${index}-${result.title}`}
                        theme={theme}>
                            {result.title}
                            {index === resultsData.length - 1 ? '' : ','}
                    </JobTitle>
                ))}
            </ResultsTitle>
            <StyledLink $isFullLink to="/Freelance">
                    Find our profiles
            </StyledLink>
            <DescriptionWrapper>
                {resultsData && resultsData.map((result, index) => (
                    <JobDescription 
                    theme={theme}
                    key={`result-detail-${index}-${result.title}`}
                    > 
                    <JobTitle theme={theme}>{result.title}</JobTitle>
                        <p>{result.description}</p>
                    </JobDescription>
                ))}
            </DescriptionWrapper>
        </ResultsContainer>
    )
}

export default Result


//console.log(answers)