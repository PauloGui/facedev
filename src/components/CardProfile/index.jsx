import React, {useState} from 'react'
import EditProfile from '../EditProfile'

import {
  Container,
  Wrapper,
  BoxImgs,
  ImgIcon,
  PencilIcon,
  DropRemoveImg,
  TriangleDrop,
  ButtonDrop,
  ContentImg,
  ImgProfile,
  BoxRepos,
  Span,
  SpanRepo,
  Strong,
  Bio,
  Repositories
} from './styles'

function CardProfile() {

  const [showEditProfile, setShowEditProfile] = useState(false)
  const [showEditImage, setShowEditImage] = useState(false)
  const [showEditImageBanner, setShowEditImageBanner] = useState(false)


  return (
    <Container>
      <Wrapper>
        <BoxImgs>
          <ImgIcon banner onClick={() => setShowEditImageBanner(!showEditImageBanner)} />
          {
              showEditImageBanner &&
              <DropRemoveImg banner>
                <TriangleDrop />
                <ButtonDrop>Remover foto</ButtonDrop>
                <ButtonDrop>Alterar foto</ButtonDrop>
              </DropRemoveImg>
            }
          <ContentImg>
            <ImgProfile src='https://avatars2.githubusercontent.com/u/18484968?s=460&u=34bd09cf09ce881107031c526e541caf1bca01c9&v=4' />
            <ImgIcon profile onClick={() => setShowEditImage(!showEditImage)} />
            {
              showEditImage &&
              <DropRemoveImg>
                <TriangleDrop />
                <ButtonDrop>Remover foto</ButtonDrop>
                <ButtonDrop>Alterar foto</ButtonDrop>
              </DropRemoveImg>
            }
          </ContentImg>
        </BoxImgs>
        <Strong>Paulo Sousa <PencilIcon onClick={() => setShowEditProfile(!showEditProfile)} /> </Strong>
        {
          showEditProfile &&
          <EditProfile />
        }
        <Span title>Desenvolvedor Front-End</Span>
        <Span email>paulo@dev.com</Span>
        <BoxRepos>
          <SpanRepo>90 Repositórios</SpanRepo>
          <SpanRepo>53 Seguidores</SpanRepo>
        </BoxRepos>
        <hr />
        <Strong bio>GitHub Bio</Strong>
        <Bio>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</Bio>
        <hr />
        <Repositories>
          <ul>
            <li>SavePoints</li>
            <li>Noteact</li>
            <li>FaceDev</li>
          </ul>
        </Repositories>
      </Wrapper>
    </Container>
  )
}

export default CardProfile