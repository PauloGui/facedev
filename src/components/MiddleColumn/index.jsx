import React from 'react'
import FeedShare from './FeedShare'
import FeedPost from './FeedPost'

import { Container } from './styles'

function MiddleColumn() {
  return (
    <Container className='middle-column'>
      <FeedShare />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </Container>
  )
}

export default MiddleColumn