import React from 'react'
import BoxProfile from '../../components/BoxProfile'
import Header from '../../components/Header'
import NewPost from '../../components/NewPost'
import NewsUsers from '../../components/NewsUsers'
import PostUsers from '../../components/PostUsers'

import { Container, Wrapper, FeedCenter } from './styles'

function Feed() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <BoxProfile />
        <FeedCenter>
          <NewPost />
          <PostUsers />
        </FeedCenter>
        <NewsUsers />
      </Wrapper>
    </Container>
  )
}

export default Feed