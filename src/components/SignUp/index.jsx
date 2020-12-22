import React, { useCallback, useRef } from 'react'
import Input from '../../components/Input'
import * as yup from 'yup'
import axios from 'axios'
import { Container, TextSignUp, FormUnform, Button } from './styles'
import { GoTriangleUp } from 'react-icons/go'
import { useAuth } from '../../hooks/AuthProvider'

function SignUp({history}) {
  const { setAuthUser } = useAuth()
  const formRef = useRef(null)

  const handleSubmit = useCallback(async (data) => {
    try {
      const schema = yup.object().shape({
        name: yup.string()
          .required('O Nome é obrigatório'),
        email: yup.string()
          .email('O Email informado é inválido')
          .required('O Email é obrigatório'),
        password: yup.string()
          .min(6, 'A senha deve ter no mínimo 6 caracteres')
          .required('A Senha é obrigatória'),
        github_user: yup.string()
          .required('O Usuário do GitHub é obrigatório'),

      })

      await schema.validate(data, {
        ebortEarly: false
      })

      formRef.current.setErrors({})

      const signUp = {}
      signUp.name = data.name
      signUp.email = data.email
      signUp.github_user = data.github_user
      signUp.password = data.password

      const resp = await axios.post('/users', signUp)
      history.push('/')
      setAuthUser({ authenticated: true, token: resp.data.auth })
      localStorage.setItem('@noteact_token', resp.data.auth)
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
      <GoTriangleUp style={{ position: 'absolute', zIndex: '15', color: '#575A89', right: '15', marginTop: '-10' }} />
      <TextSignUp>Faça cadastro e aproveite!</TextSignUp>
      <FormUnform onSubmit={handleSubmit} ref={formRef}>
        <Input type='text' name='name' placeholder='Nome completo' />
        <Input type='email' name='email' placeholder='Email' />
        <Input type='text' name='github_user' placeholder='Usuário do GitHub' />
        <Input type='password' name='password' placeholder='Senha' />
        <Button type='submit'>Salvar</Button>
      </FormUnform>
    </Container>
  )
}

export default SignUp