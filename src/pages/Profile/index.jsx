import React from 'react'
import CardProfile from '../../components/CardProfile'
import Header from '../../components/Header'
import RightColumn from '../../components/RightColumn'
import FeedPost from '../../components/MiddleColumn/FeedPost'

import { Container, Wrapper, ContentProfile } from './styles'

function Profile() {

  return(
    <Container>
      <Header />
      <Wrapper>
        <ContentProfile>
          <CardProfile />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </ContentProfile>
        <RightColumn />
      </Wrapper>
    </Container>
  )
}

export default Profile