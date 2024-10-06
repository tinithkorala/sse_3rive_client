import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Container, Grid2 as Grid, Paper, Stack } from "@mui/material";

import { useAuth } from "../../hooks/useAuth";

const GuestLayout = () => {

  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if(isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return (
    <>
      <Container maxWidth="lg" className="guest-layout-container">
        <Grid
          container
          component="main"
          className="signin-card"
          justifyContent="center"
          alignItems="center"
        >
          <Paper elevation={8}>
            <Stack
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
              sx={{
                width: "100%",
                py: {
                  xs: 1,
                  md: 3,
                },
                px: {
                  xs: 2,
                  md: 4,
                },
              }}
            >
              <Outlet />
            </Stack>
          </Paper>
        </Grid>
      </Container>
    </>
  );
};

export default GuestLayout;
