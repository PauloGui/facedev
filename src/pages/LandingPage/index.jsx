import React, { useCallback, useRef, useState, useEffect } from 'react'
import * as yup from 'yup'
import axios from 'axios'
import { useAuth } from '../../hooks/AuthProvider'

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
import LoadingLandingPage from '../../components/Shimmer/LoadingLandingPage'

function LandingPage() {
  const { setAuthUser } = useAuth()

  const [showSignUp, setShowSignUp] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const formRef = useRef(null)

  const handleSubmit = useCallback(async (data) => {
    try {
      const schema = yup.object().shape({
        email: yup.string()
          .email('O Email informado é inválido')
          .required('O Email é obrigatório'),
        password: yup.string()
          .min(6, 'A senha deve ter no mínimo 6 caracteres')
          .required('A Senha é obrigatória')
      })

      await schema.validate(data, {
        ebortEarly: false
      })

      formRef.current.setErrors({})

      const signIn = {}
      signIn.email = data.email
      signIn.password = data.password

      const resp = await axios.post('sessions', signIn)
      setAuthUser({ authenticated: true, token: resp.data.auth })
      localStorage.setItem('@facedev_token', resp.data.auth)
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const validationErrors = {}
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message
        })
        formRef.current.setErrors(validationErrors)
        return
      }
      alert(err.toString())
    }
  }, [])
  return (
    <Container>
      { isLoading ? <LoadingLandingPage /> :
        <>
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
            <FormUnform onSubmit={handleSubmit} ref={formRef}>
              <TextLogin>Faça login para continuar</TextLogin>
              <Input type='text' name='email' placeholder='Email' />
              <Input type='password' name='password' placeholder='Senha' />
              <SignUpButton login type='submit'>Entrar</SignUpButton>
            </FormUnform>
            <ImgBanner src={Banner} />
          </Content>
          <TextLogin subtitle>Descobrir e conectar desenvolvedores é o nosso lema</TextLogin>
        </>
      }
    </Container>
  )
}

export default LandingPage