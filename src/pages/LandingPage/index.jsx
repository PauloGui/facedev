import React from 'react'

import Input from '../../components/Input'

import {
  Container,
  TopContainer,
  ImgLogo,
  SignUpButton,
  Content,
  FormUnform,
  ImgBanner,
  TextLogin
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
          <TextLogin>Faça login para continuar</TextLogin>
          <Input type='text' name='email' placeholder='Email' />
          <Input type='password' name='password' placeholder='Senha' />
          <SignUpButton login>Entrar</SignUpButton>
        </FormUnform>
        <ImgBanner src={Banner} />
      </Content>
    </Container>
  )
}

export default LandingPage