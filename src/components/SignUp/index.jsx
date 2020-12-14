import React from 'react'
import Input from '../../components/Input'

import { Container, TextSignUp, FormUnform, Button } from './styles'
import {GoTriangleUp} from 'react-icons/go'

function SignUp() {
  return(
    <Container>
      <GoTriangleUp style={{position: 'absolute', zIndex: '15', color: '#575A89', right: '15', marginTop: '-10'}} />
      <TextSignUp>Faça cadastro e aproveite!</TextSignUp>
      <FormUnform>
        <Input type='text' name='name' placeholder='Nome completo' />
        <Input type='email' name='email' placeholder='Email' />
        <Input type='text' name='user' placeholder='Usuário do GitHub' />
        <Input type='password' name='password' placeholder='Senha' />
        <Button>Salvar</Button>
      </FormUnform>
    </Container>
  )
}

export default SignUp