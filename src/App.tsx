import { useLocation } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes'
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);
  return (
    <PublicRoutes />
  )
}

export default App
