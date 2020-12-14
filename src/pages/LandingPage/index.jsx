import React, { useState } from 'react'

import Input from '../../components/Input'
import SignUp from '../../components/SignUp'
import {
  Container,
  WrapperDrop,
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
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <Container>
      <TopContainer>
        <ImgLogo src={Logo} />
        <WrapperDrop>
          <SignUpButton onClick={() => setShowSignUp(!showSignUp)}>Criar uma conta</SignUpButton>
          {
            showSignUp &&
            <SignUp setShowSignUp={setShowSignUp} />
          }
        </WrapperDrop>
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