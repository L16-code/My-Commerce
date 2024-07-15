import { useLocation } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes'
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import axios from 'axios';
function App() {
  const location = useLocation();

  const [Ip, setIp]=useState();
  useEffect(() => {
    GetuserIp()
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);
  const GetuserIp=async()=>{
    const ip = await axios.get('https://ipapi.co/json')
    setIp(ip.data);
    console.log(Ip);
    console.log(ip)
  }
  return (
    <PublicRoutes />
  )
}

export default App
