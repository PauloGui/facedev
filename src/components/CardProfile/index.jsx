import React from 'react'

import {
  Container,
  Wrapper,
  BoxImgs,
  ImgIcon,
  PencilIcon,
  ContentImg,
  ImgProfile,
  BoxRepos,
  Span,
  SpanRepo,
  Strong,
  Bio
} from './styles'

function CardProfile() {
  return (
    <Container>
      <Wrapper>
        <BoxImgs>
        <ImgIcon banner />
          <ContentImg>
            <ImgProfile src='https://avatars2.githubusercontent.com/u/18484968?s=460&u=34bd09cf09ce881107031c526e541caf1bca01c9&v=4' />
            <ImgIcon profile />
          </ContentImg>
        </BoxImgs>
        <Strong>Paulo Sousa <PencilIcon /> </Strong>
        <Span title>Desenvolvedor Front-End</Span>
        <Span email>paulo@dev.com</Span>
        <BoxRepos>
          <SpanRepo>90 Repositórios</SpanRepo>
          <SpanRepo>53 Seguidores</SpanRepo>
        </BoxRepos>
        <hr />
        <Strong bio>GitHub Bio</Strong>
        <Bio>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</Bio>
      </Wrapper>
    </Container>
  )
}

export default CardProfile