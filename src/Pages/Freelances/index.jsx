import DefaultPicture from '../../assets/profile.png'
import Card from '../../Components/Card'
import styled from 'styled-components'
import colors from '../../Tools/Style/colors'
import { useState, useEffect } from 'react'
import { Loader } from '../../Tools/Style/Atoms'

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
    color:black;
    text-align: center;
    padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
    font-size: 20px;
    color: ${colors.secondary};
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
`
const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`


function Freelance(){

    //useState stores the returned datas from the API
    const [freelancersList, setFreelancesList] = useState([])
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(null)

    // launch the call API
    useEffect(
        () => {
            async function fetchFreelance(){
                setDataLoading(true)
                try{
                    const response = await fetch(`http://localhost:8000/freelances`)
                    // name of the object should be the same as where it's declared in the API :
                    const { freelancersList } = await response.json()
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

    if (error) {
        return <span>An error ocuured !</span>
    }

    return(
        <div>
            <PageTitle>Find your receiver</PageTitle>
            <PageSubtitle>We got the best profiles for you at Shiny</PageSubtitle>
            {isDataLoading ? (<LoaderWrapper><Loader/></LoaderWrapper>):(
                <CardsContainer>
                {freelancersList.map((profile, index) => (
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