import React from 'react'
import Footer from '../../molecules/Footer/Footer'
import Header from '../../molecules/Header/Header'
import ProfileContainer from '../../organisms/ProfileContainer/ProfileContainer'

const Profile: React.FC = () => {
  return (
    <div>
      <Header />
      <ProfileContainer />
      <Footer />
    </div>
  )
}

export default Profile
