import DefaultPicture from '../../assets/profile.png'
import Card from '../../Components/Card'
import styled from 'styled-components'
import colors from '../../Tools/Style/colors'

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

function Freelance(){
    return(
        <div>
            <PageTitle>Find your receiver</PageTitle>
            <PageSubtitle>We got the best profiles for you at Shiny</PageSubtitle>
        <CardsContainer>
            {freelanceProfiles.map((profile, index) => (
                <Card 
                    key={`${profile.name}-${index}`}
                    label={profile.jobtitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
        </CardsContainer>
        </div>
    )
}

export default Freelance