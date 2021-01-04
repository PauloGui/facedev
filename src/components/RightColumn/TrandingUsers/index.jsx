import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../../../hooks/AuthProvider'

import {
  Container,
  Wrapper,
  Span,
  BoxUser,
  ImgProfile,
  User,
  Strong,
  SubTitile
} from './styles'
import UserProfile from '../../../assets/profile-user.png'

function TrandingUsers() {

  const { authUser } = useAuth()

  const [lastUsers, setLastUsers] = useState([])

  useEffect(() => {
    axios.get('/lastUsers', { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
      if (resp.data.success) {
        setLastUsers(resp.data.users)
      }
    })
  }, [])


  return (
    <Container>
      <Wrapper>
        <Span>Últimos Cadastros</Span>
        <hr />
        {
          lastUsers.map(last => (
            <BoxUser key={last.id}>
              <ImgProfile src={last.image || UserProfile} />
              <User>
                <Strong>{last.name}</Strong>
                <SubTitile>{last.title}</SubTitile>
              </User>
            </BoxUser>
          ))
        }
      </Wrapper>
    </Container>
  )
}

export default TrandingUsers