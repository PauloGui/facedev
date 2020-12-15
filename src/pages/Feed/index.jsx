import React from 'react'
import BoxProfile from '../../components/BoxProfile'
import Header from '../../components/Header'
import NewsUsers from '../../components/NewsUsers'

import { Container, Wrapper } from './styles'

function Feed() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <BoxProfile />
        <NewsUsers />
      </Wrapper>
    </Container>
  )
}

export default Feed