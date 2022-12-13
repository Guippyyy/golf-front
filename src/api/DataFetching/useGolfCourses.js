
import axios from 'axios'
import { useEffect, useState } from 'react'
import { getAPIUrl } from '../../Utils';

export default function useGolfCourses() {

  const [golfData, setGolfData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const host = getAPIUrl();
        const response = await axios.get(`${host}/api/courses`);
        setGolfData(response.data) 
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false)
      }
    }

    fetchData();
  }, []);

  return { golfData, loading, error };
}