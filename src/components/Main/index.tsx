import React from 'react'
import ProfilePage from '../ProfilePage'
import {motion} from 'framer-motion'
import {Container,BackIcon,Header,ProfileInfo, HomeIcon,BellIcon,BottomMenu,EmailIcon,SearchIcon} from './styles'
const Main = () => {
  return(
    <Container>
      
      <Header>

        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Yan Rabelo</strong>
          <span>344 tweets</span>
        </ProfileInfo>
      </Header>

      


      <ProfilePage /> 

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