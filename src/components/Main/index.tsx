import React from 'react'
import {Container,BackIcon,Header,ProfileInfo} from './styles'
const Main = () => {
  return(
    <Container>
      <Header>

        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Yan de Moura</strong>
          <span>344 tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage /> */}

     <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> 
    </Container>
  )
}

export default Main