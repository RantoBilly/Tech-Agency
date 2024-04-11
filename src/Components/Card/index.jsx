import DefaultPicture from '../../assets/profile.png'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`
const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`

function Card({label, title, picture}){
    return(
        <div style={{display:'flex', flexDirection:'column', padding:15}}>
            {/*<span>{label}</span>*/}
            <CardLabel>{label}</CardLabel>
            {/*<img src={picture} alt="freelance" height={80} width={80}/>*/}
            <CardImage src={picture} alt="freelance"/>
            <span>{title}</span>
        </div>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,       //error in the console if one of these props is used as another type than string in the other components
    picture: PropTypes.string.isRequired,                //When it's isRequired, an error will occured if the prop is not used in the other components
}

Card.defaultProps = {
    title: '',  // 'default title is the value if the title property is not defined in the use of the profile object'
    label: '',
    picture: DefaultPicture,
}

export default Card