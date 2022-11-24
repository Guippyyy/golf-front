import { useState, useEffect} from 'react'
import axios from 'axios';
const host = "http://localhost:3001"

export function useScores() {
  const [scoreData, setScoreData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try{
        const reponse = await axios.get(`${host}/api/scores`);
        setScoreData(reponse.data);
      } catch(error){
        setError(error);
      } finally{
        setLoading(false)
      }
    }

    fetchData();
  }, []);
  
  return { scoreData, loading, error};  
}