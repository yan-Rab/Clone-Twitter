import React from 'react'
import StickyBox from 'react-sticky-box'
import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News/index'

import { 
  Container, 
  SearchWrapper, 
  SearchInput, 
  SearchIcon, 
  Body
} from './styles'

const SideBar = () => {
  return (
  <Container>
    <SearchWrapper>
      <SearchInput  placeholder = 'Buscar no Twitter'/>
      <SearchIcon />
    </SearchWrapper>

    <StickyBox>

    <Body>
      <List 
        title = 'Talvez você curta'
        elements = {[
          <FollowSuggestion 
            name = 'Luiz Sérgio'
            nickname = '@Luizsergi'
          />,

          <FollowSuggestion 
          name = 'Gabriel Igor'
          nickname = '@Gabi23'
          />,

          <FollowSuggestion 
          name = 'Melissa Rabelo'
          nickname = '@MelissaRabelo'
          />
        ]}
      />

      <List 
        title = 'Talvez você curta'
        elements = {[
          <News />,
          <News />,
          <News />
        ]}
      />

      <List 
        title = 'Talvez você curta'
        elements = {[
          <News />,
          <News />,
          <News />
        ]}
      />
    </Body>
    </StickyBox>
  </Container>
  )
}

export default SideBar