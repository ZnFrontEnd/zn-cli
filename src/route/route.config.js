
export default [
  {
    component: 'BaseLayout',
    routes: [
      {
        path: "/",
        key: '1-1',
        name: "首页",
        exact: true,
        component: "Home"
      },
      {
        name: "关于我们",
        key: '2-2',
        routes: [
          {
            name: "aboutOne",
            path: "/about/one",
            key: '2-2-1',
            component: "AboutOne"
          },
          {
            name: "aboutTwo",
            path: "/about/two",
            key: '2-2-2',
            component: "AboutTwo"
          }
        ]
      },
      {
        path: "/contact",
        name: "联系我们",
        key: '3-1',
        component: "Contact"
      }
    ]
  },
  {
    component: "LoginLayout",
    routes: [
      {
        path: "/login",
        name: "登录",
        key: '4-1',
        component: "Login",
        Layout: "LoginLayout"
      }
    ]
  }
];
