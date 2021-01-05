import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../../../hooks/AuthProvider'
import {
  Container,
  Wrapper,
  BoxPost,
  Profile,
  ImgProfile,
  InfoProfile,
  Strong,
  Span,
  ImgPost,
  TextPost
} from './styles'

function FeedPost() {
  const { authUser } = useAuth()

  const [postShare, setPostShare] = useState([])

  useEffect(() => {
    axios.get('/feed', { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
      if (resp.data.success) {
        setPostShare(resp.data.feed)
      }
    })
  }, [])

  return (
    <Container className='column-post'>
      <Wrapper>
        {
          postShare.map(posts => (
            <BoxPost key={posts.id}>
              <Profile>
                <ImgProfile src={posts.user_image} />
                <InfoProfile>
                  <Strong>{posts.user_name}</Strong>
                  <Span>{posts.user_title}</Span>
                </InfoProfile>
              </Profile>
              <TextPost>
                {posts.description}
                <ImgPost src={posts.image} />
              </TextPost>
            </BoxPost>
          ))
        }
      </Wrapper>
    </Container>
  )
}

export default FeedPost