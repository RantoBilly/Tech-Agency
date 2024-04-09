import DefaultPicture from '../../assets/profile.png'
import Card from '../../Components/Card'

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


function Freelance(){
    return(
        <div>
            <h1>Freelances 👩·💻👨·💻👩·💻</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card 
                    key={`${profile.name}-${index}`}
                    label={profile.jobtitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
        </div>
    )
}

export default Freelance