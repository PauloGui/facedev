import React from 'react'

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
  return (
    <Container>
      <Wrapper>
        <Span title>Usuários da plataforma</Span>
        <Content>
          <BoxUser>
            <BoxImgs>
              <ImgProfile src='https://avatars2.githubusercontent.com/u/18484968?s=460&u=34bd09cf09ce881107031c526e541caf1bca01c9&v=4' />
            </BoxImgs>
            <Strong>Paulo Sousa</Strong>
            <Span subtitle>Desenvolvedor Front-End</Span>
            <hr />
            <BoxRepos>
              <Span>90 Repositórios</Span>
              <Span>53 Seguidores</Span>
            </BoxRepos>
          </BoxUser>
          <BoxUser>
            <BoxImgs>
              <ImgProfile src='https://avatars2.githubusercontent.com/u/18484968?s=460&u=34bd09cf09ce881107031c526e541caf1bca01c9&v=4' />
            </BoxImgs>
            <Strong>Paulo Sousa</Strong>
            <Span subtitle>Desenvolvedor Front-End</Span>
            <hr />
            <BoxRepos>
              <Span>90 Repositórios</Span>
              <Span>53 Seguidores</Span>
            </BoxRepos>
          </BoxUser>
          <BoxUser>
            <BoxImgs>
              <ImgProfile src='https://avatars2.githubusercontent.com/u/18484968?s=460&u=34bd09cf09ce881107031c526e541caf1bca01c9&v=4' />
            </BoxImgs>
            <Strong>Paulo Sousa</Strong>
            <Span subtitle>Desenvolvedor Front-End</Span>
            <hr />
            <BoxRepos>
              <Span>90 Repositórios</Span>
              <Span>53 Seguidores</Span>
            </BoxRepos>
          </BoxUser>
          <BoxUser>
            <BoxImgs>
              <ImgProfile src='https://avatars2.githubusercontent.com/u/18484968?s=460&u=34bd09cf09ce881107031c526e541caf1bca01c9&v=4' />
            </BoxImgs>
            <Strong>Paulo Sousa</Strong>
            <Span subtitle>Desenvolvedor Front-End</Span>
            <hr />
            <BoxRepos>
              <Span>90 Repositórios</Span>
              <Span>53 Seguidores</Span>
            </BoxRepos>
          </BoxUser>
          <BoxUser>
            <BoxImgs>
              <ImgProfile src='https://avatars2.githubusercontent.com/u/18484968?s=460&u=34bd09cf09ce881107031c526e541caf1bca01c9&v=4' />
            </BoxImgs>
            <Strong>Paulo Sousa</Strong>
            <Span subtitle>Desenvolvedor Front-End</Span>
            <hr />
            <BoxRepos>
              <Span>90 Repositórios</Span>
              <Span>53 Seguidores</Span>
            </BoxRepos>
          </BoxUser>
          <BoxUser>
            <BoxImgs>
              <ImgProfile src='https://avatars2.githubusercontent.com/u/18484968?s=460&u=34bd09cf09ce881107031c526e541caf1bca01c9&v=4' />
            </BoxImgs>
            <Strong>Paulo Sousa</Strong>
            <Span subtitle>Desenvolvedor Front-End</Span>
            <hr />
            <BoxRepos>
              <Span>90 Repositórios</Span>
              <Span>53 Seguidores</Span>
            </BoxRepos>
          </BoxUser>
          <BoxUser>
            <BoxImgs>
              <ImgProfile src='https://avatars2.githubusercontent.com/u/18484968?s=460&u=34bd09cf09ce881107031c526e541caf1bca01c9&v=4' />
            </BoxImgs>
            <Strong>Paulo Sousa</Strong>
            <Span subtitle>Desenvolvedor Front-End</Span>
            <hr />
            <BoxRepos>
              <Span>90 Repositórios</Span>
              <Span>53 Seguidores</Span>
            </BoxRepos>
          </BoxUser>
          <BoxUser>
            <BoxImgs>
              <ImgProfile src='https://avatars2.githubusercontent.com/u/18484968?s=460&u=34bd09cf09ce881107031c526e541caf1bca01c9&v=4' />
            </BoxImgs>
            <Strong>Paulo Sousa</Strong>
            <Span subtitle>Desenvolvedor Front-End</Span>
            <hr />
            <BoxRepos>
              <Span>90 Repositórios</Span>
              <Span>53 Seguidores</Span>
            </BoxRepos>
          </BoxUser>
          <BoxUser>
            <BoxImgs>
              <ImgProfile src='https://avatars2.githubusercontent.com/u/18484968?s=460&u=34bd09cf09ce881107031c526e541caf1bca01c9&v=4' />
            </BoxImgs>
            <Strong>Paulo Sousa</Strong>
            <Span subtitle>Desenvolvedor Front-End</Span>
            <hr />
            <BoxRepos>
              <Span>90 Repositórios</Span>
              <Span>53 Seguidores</Span>
            </BoxRepos>
          </BoxUser>
          <ButtonNext>
            <NextPage>Carregar mais itens</NextPage>
          </ButtonNext>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default List