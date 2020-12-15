import React from 'react'
import Header from '../../components/Header'
import List from '../../components/List'
import NewsUsers from '../../components/NewsUsers'

import { Container, Wrapper, FeedList } from './styles'

function ListUsers() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <FeedList>
          <List />
        </FeedList>
        <NewsUsers />
      </Wrapper>
    </Container>
  )
}

export default ListUsers