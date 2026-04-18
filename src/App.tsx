import { useEffect, useState } from 'react';
import Landing from './pages/Landing';
import Mehmet from './pages/Mehmet';
import Maria from './pages/Maria';

type Route = 'landing' | 'mehmet' | 'maria';

function resolveRoute(): Route {
  if (typeof window === 'undefined') return 'landing';
  const host = window.location.hostname.toLowerCase();
  const path = window.location.pathname.toLowerCase();

  if (host.startsWith('mehmet.') || path.startsWith('/mehmet')) return 'mehmet';
  if (host.startsWith('maria.') || path.startsWith('/maria')) return 'maria';
  return 'landing';
}

function App() {
  const [route, setRoute] = useState<Route>(() => resolveRoute());

  useEffect(() => {
    const onPop = () => setRoute(resolveRoute());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  if (route === 'mehmet') return <Mehmet />;
  if (route === 'maria') return <Maria />;
  return <Landing />;
}

export default App;
