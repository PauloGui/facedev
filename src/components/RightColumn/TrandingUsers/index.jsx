import React from 'react'

import {
  Container,
  Wrapper, 
  Span, 
  BoxUser, 
  ImgProfile, 
  User, 
  Strong, 
  SubTitile
} from './styles'

function TrandingUsers() {
  return (
    <Container>
      <Wrapper>
        <Span>Últimos Cadastros</Span>
        <hr />
        <BoxUser>
          <ImgProfile src='https://avatars2.githubusercontent.com/u/52642924?s=460&u=c1f973b2f43c255a6a13d6ddd8e6f4249cfcb341&v=4' />
          <User>
            <Strong>Pedro Otoniel</Strong>
            <SubTitile>Desenvolvedor Cobol</SubTitile>
          </User>
        </BoxUser>
      </Wrapper>
    </Container>
  )
}

export default TrandingUsers