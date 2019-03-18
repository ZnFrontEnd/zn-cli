export default [
  {
    path: "/",
    key: '1-1',
    name: "首页",
    exact: true,
    component: "Home"
  },
  {
    name: "关于我们",
    path: "/about",
    key: '2-2',
    children: [
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
  },
  {
    path: "/login",
    name: "登录",
    key: '4-1',
    component: "Login",
    Layout: "LoginLayout"
  }
];
