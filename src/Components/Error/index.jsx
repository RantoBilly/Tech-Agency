import styled from 'styled-components'
import colors from '../../Tools/Style/colors'
import errorPic from '../../assets/télécharger.png'

const ErrorWrapper = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.backgroundLight};
    align-items: center;
`

const ErrorTitle = styled.h1`font-weight: 300;`

const ErrorSubtitle = styled.h2`
    font-weight: 300;
    color: ${colors.secondary};
`

const Illustration = styled.img`max-width; 800px;`

function Error(){
    return(
        <ErrorWrapper>
            <ErrorTitle>Error...</ErrorTitle>
            <Illustration src={errorPic}/>
            <ErrorSubtitle>Sorry, this page doesn't exist</ErrorSubtitle>
        </ErrorWrapper>
    )
}

export default Error