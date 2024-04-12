import styled from 'styled-components'
import colors from '../../Tools/Style/colors'
import { StyledLink } from '../../Tools/Style/Atoms'
import HomeIllustration from '../../assets/home-illustration.svg'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomeContainer = styled.div`
  margin: 30px;
  background-color: ${colors.backgroundLight};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`

const Illustration = styled.img`flex: 1;`


function App() {

  

  return (
    <HomeWrapper>
      <HomeContainer>
        <LeftCol>
          <StyledTitle>
            Locate your needs, we will take care of the rests, with the best skilled ones !
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>Start the test</StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration}/>
      </HomeContainer>
    </HomeWrapper>
  )
}

export default App;
