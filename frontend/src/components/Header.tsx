import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Content } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to='/new/99ade761-ddbb-44cc-9479-e7c701e0bfGGGG'>
          <button>Novo Cadastro</button>
        </Link>
        <Link to='/'>
          <button>Registro</button>
        </Link>
      </Content>
    </Container>
  )
}

export default Header
