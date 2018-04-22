import Loadable from 'react-loadable';
import LoadingPage from './container/LoadingPage';

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './container/Home'),
  loading: LoadingPage,
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './container/About'),
  loading: LoadingPage,
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "not_found" */ './container/NotFound'),
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
