import React, {useState} from 'react'
import Input from '../../components/Input'
import Logo from '../../assets/logo.png'
import Banner from '../../assets/banner.svg'
import { Container, ImgLogo, ImgBanner, FormUnform, Button } from './styles'
import SignUp from '../../components/SignUp'

function LandingPage() {
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <Container>
      <header>
        <ImgLogo src={Logo} />
        <Button onClick={() => setShowSignUp(!showSignUp)}>Criar conta</Button>
        {
          showSignUp &&
          <SignUp setShowSignUp={setShowSignUp} />
        }
      </header>

      <main>
        <FormUnform>
          <h3>Faça login para continuar</h3>
          <Input type='text' name='email' placeholder='Email' />
          <Input type='password' name='password' placeholder='Senha' />
          <Button login>Entrar</Button>

          <span>Descobrir e conectar desenvolvedores é o nosso lema.</span>
        </FormUnform>
        <ImgBanner src={Banner} />
      </main>
    </Container>
  )
}

export default LandingPage