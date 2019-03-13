export default [
    {
      path: '/',
      name: 'home',
      exact: true,
      component: 'Home',
      Layout: 'BaseLayout'
    },{
      path: '/about',
      name: 'about',
      component: 'About',
      Layout: 'BaseLayout'
    },{
      path: '/contact',
      name: 'contact',
      component: 'Contact',
      Layout: 'BaseLayout'
    },{
      path: '/login',
      name: 'login',
      component: 'Login',
      Layout: 'LoginLayout'
    }
  ];