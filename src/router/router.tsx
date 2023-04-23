import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout/MainLayout';
import Login from '../pages/Login/Login';
import { NotFoundPage } from '../pages/not-found/NotFound';
import ProjectsPage from '../pages/projects/Projects';
import ProjectFormPage from '../pages/project-form/ProjectFormPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/create', element: <ProjectFormPage /> },
    ],
  },
]);

export default router;
