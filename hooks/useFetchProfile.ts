// hooks/useFetchProfile.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Profile } from '../types/profile';

const useFetchProfile = (profileId: string) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get<Profile>(`http://localhost:5000/profiles/${profileId}`);
        setProfile(response.data);
      } catch (err) {
        // setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [profileId]);

  return { profile, loading, error };
};

export default useFetchProfile;
