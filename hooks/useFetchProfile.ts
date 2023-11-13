// useFetchProfile.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Profile } from '../types/profile';

const useFetchProfile = (profileId: string) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  console.log("About to fetch profile");
  
  useEffect(() => {
    axios.get<Profile>(`http://localhost:5000/profiles/${profileId}`)
      .then(response => {
        console.log('Response:', response.data);
        setProfile(response.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [profileId]);

  return { profile, loading, error };
};

export default useFetchProfile;
