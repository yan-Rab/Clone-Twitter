import React from 'react'
import Feed from '../Feed';
import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  EditButton,
  Followage} from './styles'


const ProfilePage: React.FC = () => {
  return (
  <Container>
    <Banner>
      <Avatar/>
    </Banner>

    <ProfileData>
      <EditButton outlined>
        Editar perfil
      </EditButton>

      <h1>Yan Rabelo</h1>
      <h2>@yan_rabbelo</h2>

      <p>
        Developer at Morphus Security
      </p>

      <ul>
        <li>
          <LocationIcon />
          Ceará, Brasil
        </li>

        <li>
          <CakeIcon />
          Nascido em 14 de setembro de 2003
        </li>
      </ul>

      <Followage>
        <span>
          seguindo <strong>94</strong>
        </span>

        <span>
          <strong>94</strong> seguidores
        </span>
      </Followage>
    </ProfileData>

    <Feed />
  </Container>
  )
}

export default ProfilePage;
