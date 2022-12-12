import {useEffect, useState} from 'react'
import axios from 'axios';
const host = "http://localhost:3001"

export default function useUsers() {
const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${host}/api/users`);
        setUserData(response.data) 
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false)
      }
    }

    fetchData();
  }, []);

  return { userData, loading, error };
}
