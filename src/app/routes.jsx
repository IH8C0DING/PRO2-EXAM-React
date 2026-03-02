import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { MyPlants } from './pages/MyPlants';
import { About } from './pages/About';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'my-plants',
        Component: MyPlants,
      },
      {
        path: 'about',
        Component: About,
      },
    ],
  },
]);
