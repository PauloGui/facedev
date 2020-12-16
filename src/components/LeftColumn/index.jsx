import React from 'react'
import ProfilePanel from './ProfilePanel'
import { Container } from './styles'

function LeftColumn() {
  return (
    <Container className='left-column'>
      <ProfilePanel />
    </Container>
  )
}

export default LeftColumn