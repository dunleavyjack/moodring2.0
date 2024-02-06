import { RouterProvider } from 'react-router-dom';
import { router } from './router/AppRouter';

export function App() {
    return <RouterProvider router={router} />;
}
