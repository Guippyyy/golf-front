import { useState, useEffect} from 'react'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { getAPIUrl } from '../../Utils';

export function useScores() {
  const {getAccessTokenSilently} = useAuth0();
  const [scoreData, setScoreData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    const fetchData = async () => {
      try{
        const token = await getAccessTokenSilently()
        const host = getAPIUrl()
        const reponse = await axios.get(`${host}/api/scores`, { headers: {Authorization: `Bearer ${token}` } });
        setScoreData(reponse.data);
      } catch(error){
        setError(error);
      } finally{
        setLoading(false)
      }
    }

    fetchData();
  }, [getAccessTokenSilently]);
  
  return { scoreData, loading, error };  
}