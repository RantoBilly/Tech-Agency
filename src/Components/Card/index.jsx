
import PropTypes from 'prop-types'

function Card({label, title, picture}){
    return(
        <div style={{display:'flex', flexDirection:'column', padding:15}}>
            <span>{label}</span>
            <img src={picture} alt="freelance" height={80} width={80}/>
            <span>{title}</span>
        </div>
    )
}

Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string.isRequired,       //error in the console if one of these props is used as another type than string in the other components
    picture: PropTypes.string,                //When it's isRequired, an error will occured if the prop is not used in the other components
}


export default Card