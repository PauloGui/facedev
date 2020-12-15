import React, {useState} from 'react'

import {
  Container,
  Wrapper,
  Left,
  LogoImg,
  InputSearch,
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
import Logo from '../../assets/logo.svg'

function Header() {

  const [showProfile, setShowProfile] = useState(false)

  return (
    <Container>
      <Wrapper>
        <Left>
          <LogoImg src={Logo} />
          <InputSearch placeholder='Pesquisar' />
        </Left>
        <Right>
          <Button className='active'>
            <HomeIcon />
          </Button>
          <Button>
            <UsersIcon />
          </Button>
          <Button onClick={() => setShowProfile(!showProfile)}>
            <ProfileCircle src='https://avatars2.githubusercontent.com/u/18484968?s=460&u=34bd09cf09ce881107031c526e541caf1bca01c9&v=4' />
            <CaretDownIcon />
            {
              showProfile &&
              <DropProfile>
                <TriangleDrop />
                <a href='/'> <UserProfileIcon />Meu Perfil</a>
                <a href='/'> <LogOutIcon /> Sair</a>
              </DropProfile>
            }
          </Button>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Header