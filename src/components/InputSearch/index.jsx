import React from 'react'

import { Container, Input, Searchicon, Button } from './styles'

function InputSearch() {
  return (
    <Container>
      <Input placeholder='Pesquisar' />
      <Button><Searchicon /></Button>
    </Container>

  )
}

export default InputSearch