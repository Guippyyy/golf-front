import { useState, useEffect} from 'react'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import jwt_decode from 'jwt-decode'; 
const host = "http://localhost:3001"

export function useScores() {

  // const token =  localStorage.getItem("access_token")

  const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5VVzJsR2d1SkdRVUtWRXBIbV9hRiJ9.eyJpc3MiOiJodHRwczovL2Rldi04Y3BiYmgyMXcyZ3NmOHlvLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzg4NzI1ODM3NTk1ZTRjOTk1NmM2YTYiLCJhdWQiOlsiaHR0cHM6Ly9nb2xmQXBwLmd1aWxsYXVtZS5ob2dlbnQuYmUiLCJodHRwczovL2Rldi04Y3BiYmgyMXcyZ3NmOHlvLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NzA4NDI1MTQsImV4cCI6MTY3MDkyODkxNCwiYXpwIjoidkppTk9CQ1FFdUNSTm9GVTdJNHRPOU9SSUJtNmw1RWIiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG9mZmxpbmVfYWNjZXNzIiwicGVybWlzc2lvbnMiOltdfQ.HK8gGS-73s4EY1HYDhMi7Rz4MAy7v_pcy1XxIlvsQ_spQyIBdaaUI4xdcheq3YvupVq3clacOk15zkMkM8zcUeeNGbg7xKSPa5HnhmEJ09td5I--QYa4Sw__zACUb6LlWiTKKc6tZ4cPJKPGfdUZhv_GbGo-RpAhYZ3vF89PyYxoButtlKwkyFcAp93t9DFgBoXFm5fnHUU93nFjSs8v5Z12jlRztz_VyEI9ZAGuZAMP_ZydQQRv3HGqtaTr_yTfOYofK2-H2jzwybYhlTa8b_yQGVXn13HY2pteZ8i-2fZDrMoIo9qIKgj7gmrYw2EraV4WSUO_zuMYbih474F_Ow"
  const decoded = jwt_decode(token)
  console.log(decoded.sub)

  const {getAccessTokenSilently} = useAuth0();
  const [scoreData, setScoreData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    const fetchData = async () => {
      try{
        const token = await getAccessTokenSilently()
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
  
  return { scoreData, loading, error, decoded};  
}