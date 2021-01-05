import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../services/api'
import { useAuth } from '../../hooks/AuthProvider'

import {
  Container,
  Wrapper,
  Span,
  Content,
  BoxUser,
  BoxImgs,
  ImgProfile,
  Strong,
  BoxRepos,
  ButtonNext,
  NextPage
} from './styles'

function List() {
  const { authUser } = useAuth()
  const [listUsers, setListUsers] = useState([])
  const [repository, setRepository] = useState('')
  const [followers, setFollowers] = useState('')

  // useEffect(() => {
  //   (async () => {
  //     const resp = await axios.get('/indexUsers', { headers: { Authorization: `Bearer ${authUser.token} ` } })
  //     console.log(resp.data)
  //     if (resp.data.success) {
  //       setListUsers(resp.data.users)
  //     }

  //     api.get('/indexUsers' + resp.data.user.github_user).then(resp => {
  //       setRepository(resp.data.public_repos)
  //       setFollowers(resp.data.followers)
  //     })
  //   })()
  // }, [])

  return (
    <Container>
      <Wrapper>
        <Span titleUsers>Usuários da plataforma</Span>
        <Content>
          {
            listUsers.map(user => (
              <BoxUser key={user.id}>
                <BoxImgs>
                  <ImgProfile src={user.image}/>
                </BoxImgs>
                <Strong> {user.name} </Strong>
                <Span subtitle> {user.title} </Span>
                <hr />
                <BoxRepos>
                  <Span>{repository} Repositórios</Span>
                  <Span>{followers} Seguidores</Span>
                </BoxRepos>
              </BoxUser>
            ))
          }

          <ButtonNext>
            <NextPage>Carregar mais itens</NextPage>
          </ButtonNext>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default List