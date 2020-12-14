import React from 'react'

import Input from '../../components/Input'

import {
  Container,
  TopContainer,
  ImgLogo,
  SignUpButton,
  Content,
  FormUnform,
  ImgBanner
} from './styles'
import Logo from '../../assets/logo.svg'
import Banner from '../../assets/banner_landingpage.svg'

function LandingPage() {
  return (
    <Container>
      <TopContainer>
        <ImgLogo src={Logo} />
        <SignUpButton>Criar uma conta</SignUpButton>
      </TopContainer>
      <Content>
        <FormUnform>
          <Input type='text' name='email' placeholder='Email' />
          <Input type='password' name='password' placeholder='Senha' />
        </FormUnform>
        <ImgBanner src={Banner} />
      </Content>
    </Container>
  )
}

export default LandingPage