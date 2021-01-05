import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../../hooks/AuthProvider'
import Input from '../Input'
import { Container, Strong, FormUnform, Button } from './styles'

function EditProfile() {

  const { signIn, authUser} = useAuth()
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [gitUser, setGitUser] = useState('')

  useEffect(() => {
    axios.get('/users/' + signIn, { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
      if (resp.data.success) {
        setName(resp.data.user.name)
        setTitle(resp.data.user.title)
        setEmail(resp.data.user.email)
        setGitUser(resp.data.user.github_user)
      }
    })
  }, [])
  return (
    <Container>
      <Strong>Editar Dados</Strong>
      <FormUnform>
        <label>Nome</label>
        <Input type='text' name='name'/>
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