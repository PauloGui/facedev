import React from 'react'

import {
  Container,
  Wrapper,
  TextArea,
  Footer,
  Input,
  Button
} from './styles'

function FeedShare() {
  return (
    <Container>
      <Wrapper>
        <TextArea placeholder='Comece a publicar...' />
        <Footer>
          <Input type='file' />
          <Button>Publicar</Button>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default FeedShare