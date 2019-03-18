export default [
  {
    path: "/",
    name: "home",
    exact: true,
    component: "Home"
  },
  {
    name: "about",
    path: "/about",
    children: [
      {
        name: "aboutOne",
        path: "/about/one",
        component: "AboutOne"
      },
      {
        name: "aboutTwo",
        path: "/about/two",
        component: "AboutTwo"
      }
    ]
  },
  {
    path: "/contact",
    name: "contact",
    component: "Contact"
  },
  {
    path: "/login",
    name: "login",
    component: "Login",
    Layout: "LoginLayout"
  }
];
