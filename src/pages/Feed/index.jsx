import React from 'react'
import BoxProfile from '../../components/BoxProfile'
import Header from '../../components/Header'

import { Container, Wrapper } from './styles'

function Feed() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <BoxProfile />
      </Wrapper>
    </Container>
  )
}

export default Feed