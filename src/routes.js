import Loadable from 'react-loadable';
import LoadingPage from './container/LoadingPage';

const Home = Loadable({
  loader: () => import('./container/Home'),
  loading: LoadingPage,
});

const About = Loadable({
  loader: () => import('./container/About'),
  loading: LoadingPage,
});

const NotFound = Loadable({
  loader: () => import('./container/NotFound'),
  loading: LoadingPage,
});


const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: true,
  },
  {
    component: NotFound,
  },
];

export default routes;
