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

function FeedPost() {
  return (
    <Container className='column-post'>
      <Wrapper>
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

export default FeedPost