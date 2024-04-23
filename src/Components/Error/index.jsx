import styled from 'styled-components'
import colors from '../../Tools/Style/colors'
import errorPic from '../../assets/télécharger.png'
import { useTheme } from '../../Tools/Hooks'

const ErrorWrapper = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    align-items: center;
`

const ErrorTitle = styled.h1`
    font-weight: 300;
    color:${({theme}) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const ErrorSubtitle = styled.h2`
    font-weight: 300;
    color: ${({theme}) => (theme === 'light' ? colors.secondary : '#ffffff')};
`

const Illustration = styled.img`max-width; 800px;`

function Error(){

const {theme} = useTheme()

    return(
        <ErrorWrapper theme={theme}>
            <ErrorTitle theme={theme}>Error...</ErrorTitle>
            <Illustration src={errorPic}/>
            <ErrorSubtitle theme={theme}>Sorry, this page doesn't exist</ErrorSubtitle>
        </ErrorWrapper>
    )
}

export default Error