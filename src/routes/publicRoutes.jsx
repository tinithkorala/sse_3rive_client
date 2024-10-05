import SignInPage from "../pages/auth/SignIn";
import SignUpPage from "../pages/auth/SignUp";

export const authRoutes = [
  {
    id: 1,
    name: "Sign-in",
    path: "/sign-in",
    component: <SignInPage />,
  },
  {
    id: 2,
    name: "Sign-up",
    path: "/sign-up",
    component: <SignUpPage />,
  },
];

export default [...authRoutes];
