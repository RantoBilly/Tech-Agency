import { Link, useParams } from "react-router-dom"
import styled from 'styled-components'
import colors from "../Tools/Style/colors"
import { useState, useEffect } from "react"
import { Loader } from "../Tools/Style/Atoms"

const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const QuestionTitle = styled.h2`
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`margin: 30px;`

const LinkWrapper = styled.div`
    padding-top: 30px;
    & a {
        color: black;
    }
    & a:first-of-type {
        margin-right: 20px;
    }
`


function Survey(){

    const {questionNumber} = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const previousQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    const [surveyData, setSurveyData] = useState({})
    const [isDataLoading, setDataLoading] = useState(false) // for the loader icon
    const [error, setError] = useState(null)

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

    useEffect(
        () => {
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

    return(
       
            <SurveyContainer>
                <QuestionTitle>Question {questionNumber}</QuestionTitle>
                {isDataLoading ? (<Loader/>): (
                <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
                )}
                <LinkWrapper>
                <Link to={`/survey/${previousQuestionNumber}`}>Previous</Link>
                {surveyData[questionNumberInt +1] ? (
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