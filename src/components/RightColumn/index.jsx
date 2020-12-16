import React from 'react'
import TrandingUsers from './TrandingUsers'

import { Container } from './styles'

function RightColumn() {
  return (
    <Container className='right-column'>
      <TrandingUsers />
    </Container>
  )
}

export default RightColumn