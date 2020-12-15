import React from 'react'

import {
  Container,
  Wrapper,
  BoxImgs,
  ImgProfile,
  BoxRepos,
  Span,
  Strong,
  Bio
} from './styles'

function BoxProfile() {
  return (
    <Container>
      <Wrapper>
        <BoxImgs>
          <ImgProfile src='https://avatars2.githubusercontent.com/u/18484968?s=460&u=34bd09cf09ce881107031c526e541caf1bca01c9&v=4'  />
        </BoxImgs>
        <Strong>Paulo Sousa</Strong>
        <Span title>Desenvolvedor Front-End</Span>
        <hr />
        <BoxRepos>
          <Span>90 Repositórios</Span>
          <Span>53 Seguidores</Span>
        </BoxRepos>
        <hr />
        <Bio>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</Bio>
      </Wrapper>
    </Container>
  )
}

export default BoxProfile