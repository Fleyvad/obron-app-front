import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout/MainLayout';
import Login from '../pages/Login/Login';
import { NotFoundPage } from '../pages/not-found/NotFound';
import ProjectsPage from '../pages/projects/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '/projects', element: <ProjectsPage /> }],
  },
]);

export default router;
