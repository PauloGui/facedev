import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import api from '../../services/api'
import { useAuth } from '../../hooks/AuthProvider'
import EditProfile from '../EditProfile'
import Gradiente from '../../assets/gradient.jpg'
import {
  Container,
  Wrapper,
  BoxImgs,
  ImgBackground,
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
import UserProfile from '../../assets/profile-user.png'

function CardProfile() {
  const inputFile = useRef(null)
  const { authUser, userData, updateUser } = useAuth()

  const [showEditProfile, setShowEditProfile] = useState(false)
  const [showEditImage, setShowEditImage] = useState(false)
  const [showEditImageBanner, setShowEditImageBanner] = useState(false)
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [imageBack, setImageBack] = useState('')
  const [email, setEmail] = useState('')
  const [repository, setRepository] = useState('')
  const [repo, setRepo] = useState([])
  const [followers, setFollowers] = useState('')
  const [bio, setBio] = useState('')

  useEffect(() => {
    (async () => {
      const resp = await axios.get('/users', { headers: { Authorization: `Bearer ${authUser.token} ` } })
      if (resp.data.success) {
        setName(resp.data.user.name)
        setTitle(resp.data.user.title)
        setImage(resp.data.user.image)
        setEmail(resp.data.user.email)
        setImageBack(resp.data.user.background)
      }

      api.get('/users/' + resp.data.user.github_user).then(resp => {
        setRepository(resp.data.public_repos)
        setFollowers(resp.data.followers)
        setBio(resp.data.bio)
      })

      api.get(`/users/${resp.data.user.github_user}/repos`).then(resp => {
        const repos = resp.data.map((rep) => rep.name)
        setRepo(repos)
        console.log(resp.data)
      })
    })()
  }, [])

  const handleImgProfile = () => {
    const linkImage = URL.createObjectURL(inputFile.current.files[0])
    setImage(linkImage)

    const formData = new FormData()
    formData.append('file', inputFile.current.files[0])
    axios.put('users/profileImage', formData, { headers: { Authorization: `Bearer ${authUser.token} ` } })
    .then(resp => {
      console.log(resp.data)
        if (resp.data.success) {
          return updateUser(resp.data.user)
        }
      })
  }

  const handleImgBackground = () => {
    const linkImage = URL.createObjectURL(inputFile.current.files[0])
    setImageBack(linkImage)

    const formData = new FormData()
    formData.append('file', inputFile.current.files[0])
    axios.put('users/backgroundImage', formData, { headers: { Authorization: `Bearer ${authUser.token} ` } })
    .then(resp => {
      console.log(resp.data)
        if (resp.data.success) {
          return updateUser(resp.data.user)
        }
      })
  }


  return (
    <Container>
      <Wrapper>
        <BoxImgs>
          <ImgBackground src={imageBack || Gradiente} />
          <ImgIcon banner onClick={() => setShowEditImageBanner(!showEditImageBanner)} />
          {
            showEditImageBanner &&
            <DropRemoveImg banner>
              <TriangleDrop />
              <ButtonDrop>Remover foto</ButtonDrop>
              <input
                type="file"
                ref={inputFile}
                accept='image/png, image/jpeg'
                style={{ display: 'none' }}
                onChange={handleImgBackground}
              />
              <ButtonDrop onClick={() => inputFile.current.click()}>Alterar foto</ButtonDrop>
            </DropRemoveImg>
          }
          <ContentImg>
            <ImgProfile src={image || UserProfile} />
            <ImgIcon profile onClick={() => setShowEditImage(!showEditImage)} />
            {
              showEditImage &&
              <DropRemoveImg>
                <TriangleDrop />
                <ButtonDrop>Remover foto</ButtonDrop>
                <input
                  type="file"
                  ref={inputFile}
                  accept='image/png, image/jpeg'
                  style={{ display: 'none' }}
                  onChange={handleImgProfile}
                />
                <ButtonDrop onClick={() => inputFile.current.click()}>Alterar foto</ButtonDrop>
              </DropRemoveImg>
            }
          </ContentImg>
        </BoxImgs>
        <Strong>{userData.name} <PencilIcon onClick={() => setShowEditProfile(!showEditProfile)} /> </Strong>
        {
          showEditProfile &&
          <EditProfile />
        }
        <Span title>{title}</Span>
        <Span email>{email}</Span>
        <BoxRepos>
          <SpanRepo>{repository} Repositórios</SpanRepo>
          <SpanRepo>{followers} Seguidores</SpanRepo>
        </BoxRepos>
        <hr />
        <Strong bio>GitHub Bio</Strong>
        <Bio> {bio} </Bio>
        <hr />
        <Strong>Meus Repositórios</Strong>
        <Repositories>
          {
            repo.map((reps) => (
              <ul key={reps.id}>
                <li>{reps}</li>
              </ul>
            ))
          }
        </Repositories>
      </Wrapper>
    </Container>
  )
}

export default CardProfile