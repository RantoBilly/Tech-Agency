import { Link, useParams } from "react-router-dom"
import styled from 'styled-components'
import colors from "../Tools/Style/colors"
import {useContext } from "react"
import { Loader } from "../Tools/Style/Atoms"
import { SurveyContext } from '../Tools/Context'
import { useFetch, useTheme } from "../Tools/Hooks"

const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const QuestionTitle = styled.h2`
    text-decoration: underline;
    text-decoration-color: ${colors.primary}
    color: ${({theme}) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const QuestionContent = styled.span`
    margin: 30px;
    color: ${({theme}) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const LinkWrapper = styled.div`
    padding-top: 30px;
    & a {
        color: ${({theme}) => (theme === 'light' ? '#000000' : '#ffffff')};
    }
    & a:first-of-type {
        margin-right: 20px;
    }
`

const ReplyBox = styled.button`
    border: none;
    height: 100px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    color: ${({theme}) => (theme === 'light' ? '#000000' : '#ffffff')};
    border-radius: 30px;
    cursor: pointer;
    box-shadow: ${(props) =>
        props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : `none`
    };
    &:first-child {
        margin-right: 15px;
    }
    &:last-of-type{
        margin-left: 15px;
    }
`

const ReplyWrapper = styled.div`
    display: flex;
    flex-direction: row;
`


function Survey(){

    const {questionNumber} = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const previousQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    
    const {answers, saveAnswers} = useContext(SurveyContext)// answers is initially an empty object
    
    const {data, isLoading, error} = useFetch(`http://localhost:8000/survey`)
    const {surveyData} = data // data is initially an empty object => surveyData is still undefined
    const {theme} = useTheme()

    //used when a button (yes or no) is onCLick
    function saveReply(answer){
        saveAnswers({[questionNumber] : answer})
    }

    //Another way to fetch an URL
    /*useEffect(
        () => {
            setDataLoading(true)
            //from index.js in routes of the API (router.get('/survey', function(req, res)) etc ...)
            fetch(`http://localhost:8000/survey`).then(
                (response) => response.json().then(({surveyData}) => {
                    setSurveyData(surveyData)
                    setDataLoading(false)
                })
            )
        }, []
    )*/

    
    if(error){
        return<span>An error occured ...</span>
    }

    return(
       
            <SurveyContainer>
                <QuestionTitle theme={theme}>Question {questionNumber}</QuestionTitle>
                {isLoading ? (<Loader/>): (
                //(&&): Checking that surveyData is defined before using it in the component
                <QuestionContent theme={theme}>{surveyData && surveyData[questionNumber]}</QuestionContent>
                )}
                {/**(&&) : Checking that answers is defined before using it in the component */}
                {answers && (
                    <ReplyWrapper>
                    <ReplyBox onClick={() => saveReply(true)} isSelected={answers[questionNumber] === true} theme={theme}> 
                        Yes
                    </ReplyBox>
                    <ReplyBox onClick={() => saveReply(false)} isSelected={answers[questionNumber] === false} theme={theme}>
                        No
                    </ReplyBox>
                </ReplyWrapper>
                )}
                
                <LinkWrapper theme={theme}>
                <Link to={`/survey/${previousQuestionNumber}`}>Previous</Link>
                {/** (&&): Checking that surveyData is defined before using it in the component */}
                {surveyData && surveyData[questionNumberInt +1] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Next</Link>
                ):(
                    <Link to="/Result">Results</Link>
                )}
                </LinkWrapper>
                
            </SurveyContainer>
        )
}

export default Survey

    //without the API REST :
       /* <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>

            <Link to={`/survey/${previousQuestionNumber}`}>Previous</Link>
            
            {questionNumberInt === 10 ? (
                <Link to="/Result">Results</Link>
            ): <Link to={`/survey/${nextQuestionNumber}`}>Next</Link> }

        </div>*/

        /**
 
        // Without the personal hook :

    //const [surveyData, setSurveyData] = useState({})
    //const [isDataLoading, setDataLoading] = useState(false) // for the loader icon
    //const [error, setError] = useState(null)

      useEffect(  () => {
            async function fetchSurvey(){
                setDataLoading(true)
                try{
                    // the URL in fetch is the endpoint of the surveyData
                    const response = await fetch(`http://localhost:8000/survey`)
                    // parsing the response :
                    const { surveyData } = await response.json()
                    setSurveyData(surveyData)
                }catch(err){
                    console.log(err)
                    setError(true)
                }finally{
                    setDataLoading(false)
                }
            }
            fetchSurvey()
        }, []
    )

         */