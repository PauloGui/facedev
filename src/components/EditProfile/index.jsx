import React from 'react'
import Input from '../Input'
import { Container, Strong, FormUnform, Button } from './styles'

function EditProfile() {
  return (
    <Container>
      <Strong>Editar Dados</Strong>
      <FormUnform>
        <label>Nome</label>
        <Input type='text' name='name' />
        <label>Título</label>
        <Input type='text' name='title' />
        <label>Email</label>
        <Input disabled type='text' name='email' />
        <label>Usuário do GitHub</label>
        <Input disabled type='text' name='user' />
        <Button>Salvar</Button>
      </FormUnform>
    </Container>
  )
}

export default EditProfile