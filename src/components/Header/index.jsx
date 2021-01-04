import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import InputSearch from '../InputSearch'
import axios from 'axios'
import {
  Container,
  Wrapper,
  Left,
  LogoImg,
  Right,
  Button,
  HomeIcon,
  UsersIcon,
  CaretDownIcon,
  ProfileCircle,
  DropProfile,
  TriangleDrop,
  UserProfileIcon,
  LogOutIcon
} from './styles'
import Logo from '../../assets/logo.png'
import { useAuth } from '../../hooks/AuthProvider'

function Header() {
  const { setAuthUser } = useAuth()
  const [userSearch, setUserSearch] = useState('')
  const [showProfile, setShowProfile] = useState(false)

  useEffect(() => {
    usersList()
  }, [])

  const usersList = () => {
    axios.get(`/searchUser?search=${userSearch}`).then(resp => {
      return setUserSearch(resp.data)
    }).catch((err) => {
      alert('Usuário não cadastrado!')
    })
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to='/'><LogoImg src={Logo} /></Link>
          <InputSearch value={userSearch} />
        </Left>
        <Right>
          <Button className='active'>
            <HomeIcon />
          </Button>
          <Button>
            <Link to='/users'><UsersIcon /></Link>
          </Button>
          <Button onClick={() => setShowProfile(!showProfile)}>
            <ProfileCircle src='https://avatars2.githubusercontent.com/u/18484968?s=460&u=34bd09cf09ce881107031c526e541caf1bca01c9&v=4' />
            <CaretDownIcon />
            {
              showProfile &&
              <DropProfile>
                <TriangleDrop />
                <Link to='/profile'> <UserProfileIcon />Meu Perfil</Link>
                <button exit onClick={() => {
                  localStorage.removeItem('@facedev_token')
                  setAuthUser({ authenticated: false })
                }}> <LogOutIcon /> Sair</button>
              </DropProfile>
            }
          </Button>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Header