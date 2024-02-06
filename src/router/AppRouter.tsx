import { createBrowserRouter } from 'react-router-dom';
import {
    Root,
    LoginPage,
    RedirectPage,
    MoodPage,
    AboutPage,
    ErrorPage,
    AnalyzePage,
} from '../pages';

export enum Route {
    LOGIN = '/',
    REDIRECT = '/redirect',
    ANALYZE = '/analyze',
    MOOD = '/mood',
    ABOUT = '/about',
    ERROR = '/error',
}

export const router = createBrowserRouter([
    {
        path: Route.LOGIN,
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: Route.LOGIN,
                element: <LoginPage />,
            },
            {
                path: Route.REDIRECT,
                element: <RedirectPage />,
            },
            {
                path: Route.ANALYZE,
                element: <AnalyzePage />,
            },
        ],
    },
    {
        path: Route.MOOD,
        element: <MoodPage />,
    },
    {
        path: Route.ABOUT,
        element: <AboutPage />,
    },
]);
