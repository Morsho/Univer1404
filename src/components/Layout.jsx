import { Box } from '@mui/material';

function Layout({children}) {
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, ml: "220px" }}>
        {children}
      </Box>
    </Box>
  );
}

export default Layout;