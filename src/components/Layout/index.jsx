import React from 'react'
import LeftColumn from '../LeftColumn'
import MiddleColumn from '../MiddleColumn'
import RightColumn from '../RightColumn'
import Header from '../Header'

import { Container } from './styles'

function Layout() {
  return(
    <Container>
      <Header />

      <main>
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </main>
    </Container>
  )
}

export default Layout