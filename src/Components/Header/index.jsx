import { Link } from 'react-router-dom'

function Header(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/survey/1">Questionnaire</Link> {/** Initialization when it's the first question, will change depends on the next or previous link */}
            <Link to="/Freelance">Freelance</Link>
        </nav>
    )
}

export default Header