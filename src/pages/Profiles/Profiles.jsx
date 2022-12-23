import { useState, useEffect } from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import * as profileService from '../../services/profileService'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <main>
        <h1>Potluckers</h1>
        {profiles.length ? 
          <>
            {profiles.map(profile=>
              <ProfileCard key={profile._id} profile={profile} />
            )}
          </>
        :
          <p>No profiles yet</p>
        }
      </main>
    </>
  )
}

export default Profiles