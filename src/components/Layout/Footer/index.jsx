import { Box, Typography, useTheme } from "@mui/material";

import { themeModes } from "./../../../utils/uiUtils";
import { blueGrey, grey } from "@mui/material/colors";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        p: 0.5,
        m: 0,
        textAlign: "center",
        bgcolor:
          theme.palette.mode === themeModes?.DARK ? blueGrey[900] : grey[400],
        position: "relative",
        mt: "auto",
      }}
    >
      <Typography variant="body2">
        © 2024 3Rive. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
