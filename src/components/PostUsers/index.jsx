import React from 'react'

import {
  Container,
  Wrapper,
  BoxPost,
  Profile,
  ImgProfile,
  InfoProfile,
  Strong,
  Span,
  TextPost
} from './styles'

function PostUsers() {
  return (
    <Container>
      <Wrapper>
      <BoxPost>
          <Profile>
            <ImgProfile src='https://avatars2.githubusercontent.com/u/52642924?s=460&u=c1f973b2f43c255a6a13d6ddd8e6f4249cfcb341&v=4' />
            <InfoProfile>
              <Strong>Pedro Otoniel</Strong>
              <Span>Desenvolvedor Cobol</Span>
            </InfoProfile>
          </Profile>
          <TextPost>Tenho é raiva de programador nutela... aprende a programar em C primeiro pra falar comigo.
          </TextPost>
        </BoxPost>
        <BoxPost>
          <Profile>
            <ImgProfile src='https://avatars1.githubusercontent.com/u/39929216?s=460&u=c9b3883256d47c27e80cc45b9bfd02cdd7090b4b&v=4' />
            <InfoProfile>
              <Strong>Jefferson Patrício</Strong>
              <Span>Líder de Desenvolvimento</Span>
            </InfoProfile>
          </Profile>
          <TextPost>Não consigo entender como que tem uns programadores que
            não conseguem fazer um simples calculo do padding das páginas, revoltante.
            Por isso o Brasil ta do jeito que tá...
          </TextPost>
        </BoxPost>
        <BoxPost>
          <Profile>
            <ImgProfile src='https://avatars3.githubusercontent.com/u/27922676?s=460&u=e0fb3e23e6b4c054c1e4bfe524a65231dbd75fdc&v=4' />
            <InfoProfile>
              <Strong>Julian Franco</Strong>
              <Span>Coder</Span>
            </InfoProfile>
          </Profile>
          <TextPost>Buguei com tanto código...
          </TextPost>
        </BoxPost>
        <BoxPost>
          <Profile>
            <ImgProfile src='https://avatars1.githubusercontent.com/u/39929216?s=460&u=c9b3883256d47c27e80cc45b9bfd02cdd7090b4b&v=4' />
            <InfoProfile>
              <Strong>Jefferson Patrício</Strong>
              <Span>Líder de Desenvolvimento</Span>
            </InfoProfile>
          </Profile>
          <TextPost>Um casal de prear e dois bigbig pra quem derrubar essa aplicação!
          </TextPost>
        </BoxPost>
      </Wrapper>
    </Container>
  )
}

export default PostUsers