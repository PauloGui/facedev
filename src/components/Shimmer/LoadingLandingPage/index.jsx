import React from 'react'
import { Container, ImgLogo, ImgLoading } from './styles'
import Logo from '../../../assets/logo.svg'
import Pulse from '../../../assets/Pulse-1s-200px.svg'


function LoadingLandingPage() {
  return (
    <Container>
      <ImgLogo src={Logo} />
      <ImgLoading src={Pulse} />
    </Container>
  )
}

export default LoadingLandingPage