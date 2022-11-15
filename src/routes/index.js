import { useRoutes } from 'react-router-dom';

import MainRoutes from './Main.route';
import NotFoundRoutes from './NotFound.route';

export default function Router() {
  return useRoutes([MainRoutes, NotFoundRoutes]);
}
