import DefaultPicture from '../../assets/profile.png'
import Card from '../../Components/Card'
import styled from 'styled-components'
import colors from '../../Tools/Style/colors'
import { useState, useEffect } from 'react'
import { Loader } from '../../Tools/Style/Atoms'
import { useFetch, useTheme } from '../../Tools/Hooks'

const freelanceProfiles = [
    {
        name:'Ranto Billy',
        jobtitle: 'DevOps',
        picture: DefaultPicture
    },
    
    {
        name: 'Jalen Johnson',
        jobtitle: 'Front-End Developper',
        picture: DefaultPicture
    },

    {
        name: 'Candace Parker',
        jobtitle: 'Fullstack Developper',
        picture: DefaultPicture
    }
]

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`
const PageTitle = styled.h1`
    font-size: 30px;
    color:${({theme}) => (theme === 'light' ? '#000000' : '#ffffff')};
    text-align: center;
    padding-bottom: 30px;
`
//color: ${colors.secondary};
const PageSubtitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
    color: ${({theme}) => (theme === 'light' ? '#000000' : '#ffffff')};
`
const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`


function Freelance(){

    
    const { theme } = useTheme()
    // launch the call API
    const {data, isLoading, error} = useFetch(`http://localhost:8000/freelances`)

     

    if (error) {
        return <span>An error ocuured !</span>
    }

    const freelancersList = data?.freelancersList // this syntaxe is used for arrays as freelancersList is an array (from the URL of the API)

    return(
        <div>
            <PageTitle theme={theme}>Find your receiver</PageTitle>
            <PageSubtitle theme={theme}>Shiny offers you the best profiles</PageSubtitle>
            {isLoading ? (<LoaderWrapper><Loader/></LoaderWrapper>):(
                <CardsContainer>
                {freelancersList && freelancersList.map((profile, index) => (
                    <Card 
                        key={`${profile.id}-${index}`}
                        label={profile.job}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
            )}     
        </div>
    )
}

export default Freelance

//Without the personal hook
/**
 * //useState stores the returned datas from the API

    //freelancersListis an array of objects, so [] should be the returned state as we use the map method for
    //returning it
    //const [freelancersList, setFreelancesList] = useState([])

    //const [isDataLoading, setDataLoading] = useState(false)
    
    //const [error, setError] = useState(null)
 * 
 * useEffect(
        () => {
            async function fetchFreelance(){
                setDataLoading(true)
                try{
                    const response = await fetch(`http://localhost:8000/freelances`)
                    // name of the object should be the same as where it's declared in the API :
                    const { freelancersList } = await response.json() // Destructuration
                    setFreelancesList(freelancersList)
                }catch(err){
                    console.log(err)
                    setError(true)
                }finally{
                    setDataLoading(false)
                }
            }
            fetchFreelance()
        }, []
    )
 * 
 */