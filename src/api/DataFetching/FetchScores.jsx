import { useState, useEffect} from 'react'
import axios from 'axios';
const host = "http://localhost:3001"

export function useScores() {
    const [scoreData, setScoreData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios.get(`${host}/api/scores`)
      .then((res) => {
        setScoreData(res.data);
      })
      .catch((error) =>{
        setError(error);
      })
      .finally(() => {
        setLoading(false)
      })
    }, [])
  
     return { scoreData, loading, error};
  
  
  
   }