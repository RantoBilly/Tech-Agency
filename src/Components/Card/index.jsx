import DefaultPicture from '../../assets/profile.png'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../Tools/Style/colors'
import { useTheme } from '../../Tools/Hooks'

const CardLabel = styled.span`
    color: ${({theme}) => (theme === 'light' ? colors.primary : '#ffffff')};
    font-size: 22px;
    font-weight: bold;
`
const CardTitle = styled.span`
    color: ${({theme}) => (theme === 'light' ? '#000000' : '#ffffff')};
    font-size: 22px;
    font-weight: normal;
    align-self: center;
`

const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${({theme}) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;

    &:hover{
        cursor:pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

function Card({label, title, picture}){

    const {theme} = useTheme()

    return(
       <CardWrapper theme={theme}>
            {/*<span>{label}</span>*/}
            <CardLabel theme={theme}>{label}</CardLabel>
            {/*<img src={picture} alt="freelance" height={80} width={80}/>*/}
            <CardImage src={picture} alt="freelance"/>
            {/*<span>{title}</span>*/}
            <CardTitle theme={theme}>{title}</CardTitle>
        </CardWrapper>
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