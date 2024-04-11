import DefaultPicture from '../../assets/profile.png'
import Card from '../../Components/Card'
import styled from 'styled-components'

const freelanceProfiles = [
    {
        name:'Ranto Billy',
        jobtitle: 'DevOps',
        picture: DefaultPicture
    },
    
    {
        name: 'Jalen Johnson',
        jobtitle: 'Frontend Developper',
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
`

function Freelance(){
    return(
        <div>
        <CardsContainer>
            <h1>Freelances 👩·💻👨·💻👩·💻</h1>
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