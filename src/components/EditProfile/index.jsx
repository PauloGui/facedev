import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../../hooks/AuthProvider'
import Input from '../Input'
import { Container, Strong, FormUnform, Button } from './styles'

function EditProfile() {

  const { authUser} = useAuth()
  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get('/users', { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
      if (resp.data.success) {
        const userData = {
          name: resp.data.user.name,
          title: resp.data.user.title,
          email: resp.data.user.email,
          github_user: resp.data.user.github_user
        }
        setUser(userData)
      }
    })
  }, [])
  return (
    <Container>
      <Strong>Editar Dados</Strong>
      <FormUnform initialData={user}>
        <label>Nome</label>
        <Input type='text' name='name'/>
        <label>Título</label>
        <Input type='text' name='title' />
        <label>Email</label>
        <Input disabled type='text' name='email' />
        <label>Usuário do GitHub</label>
        <Input disabled type='text' name='github_user' />
        <Button>Salvar</Button>
      </FormUnform>
    </Container>
  )
}

export default EditProfile